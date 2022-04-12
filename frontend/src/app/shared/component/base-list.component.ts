import {  Inject, Injectable, Injector, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { BaseMultiService } from '../service/base-multi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { ListColumn } from '../model/list-column.model';
import { HandleErrorService } from '../service/handleError.service';
import { SystemMessage } from '../support/messages.helper';
import { getTotalScoreSelector } from '../store/selectors';

@Injectable()
export abstract class BaseListComponent<T extends { id?: number }, 
                                        S extends BaseMultiService<T> = BaseMultiService<T>>
  implements OnInit, OnDestroy
{
  protected readonly activatedRoute: ActivatedRoute;
  protected readonly router: Router;
  protected readonly notificationService: NotificationService;
  public readonly routeTitle: string;
  protected subscription$! : Subscription;
  protected readonly store!: Store<{ total_score: number }>;

  team_id$: string | number | null = null;
  dataSource: T[] = [];
  selectedItems: T[] = [];
  isLoading = false;
  // totalScore$: Observable<number> = of(0) ;
  totalScore: any = 0 ;

  columns!: ListColumn[];

  protected constructor(
    @Inject(Object) protected readonly entityService: S,
    injector: Injector,
    ) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.store = injector.get(Store);
    this.router = injector.get(Router);
    this.notificationService = injector.get(NotificationService);
    this.routeTitle = this.activatedRoute.snapshot.data['title'];
  }

  // Show columns in table
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property); 
  }


  ngOnInit(){
    this.refresh();
  }

  refresh(): void{
    this.subscription$ = this.activatedRoute.params.pipe(map((params) => params['id'])).
                                subscribe(id => this.team_id$= id);

    this.isLoading = true;
    try {
      if(this.team_id$ ){
        this.getAllById(Number(this.team_id$ ));
      }else{
        this.getAll();
      }
      this.isLoading = false;
    } catch (error) {
      this.handleErrorService(error);

    }
  }

  getAll(): void {
    this.subscription$  = this.entityService.getAll().subscribe({
      next: (result: any) => { 
        this.dataSource = result; 
        this.getTotalScore(this.dataSource)  
      },
      error: (error) => { 
        this.handleErrorService(error);
      },
      complete: () => { 
      }
    })
  }

  getAllById(team_id$ : number): void{
    this.subscription$  = this.entityService.getAllUsersByTeamId(team_id$ ).subscribe({
      next: (result: any) => { 
        this.dataSource = result;  
        this.getTotalScore(this.dataSource)   
      },
      error: (error) => { 
        this.handleErrorService(error);

      },
      complete: () => { 
      }
    });
  }


  async detail(item: T): Promise<void> {
    await this.router.navigate(['teams/', item.id], { relativeTo: this.activatedRoute });
  }


  update(item: T): void {
    this.subscription$  = this.entityService.update(item.id as number, item).subscribe({
      next: () => {},
      error: (error) => { 
        this.handleErrorService(error); 
      },
      complete: () => { 
        const title = this.routeTitle;
        this.notificationService.success(title, SystemMessage.updateSuccess);
        this.refresh();
      }
    });
  }


  handleErrorService(error: any){
    let handleError = new HandleErrorService();
    let res = handleError.handleError(error)

    typeof res.result == 'string' && this.notificationService.error('An error occurred', res.result);
 
  }

  ngOnDestroy(): void {
    this.subscription$  && this.subscription$ .unsubscribe();
  }

  getTotalScore = (dataSource: any) => this.store.pipe(select(getTotalScoreSelector(dataSource))).
                          subscribe(val => (this.totalScore = val));

}
