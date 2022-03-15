import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BaseMultiRxjsService } from '../api/base-multi-rxjs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorUtils } from '../support/error.utils';
import { NotificationService } from '../service/notification.service';
import { ListColumn } from '../model/list-column.model';
import { Subscription } from 'rxjs';
import { CapitalizePipe } from '../pipe/capitalize.pipe';


export abstract class BaseListComponent<T extends { id?: number }, 
                                        S extends BaseMultiRxjsService<T> = BaseMultiRxjsService<T>>
  implements OnInit
{
  protected readonly activatedRoute: ActivatedRoute;
  protected readonly router: Router;
  protected readonly notificationService: NotificationService;
  public readonly routeTitle: string;
  subscription: Subscription;
  team_id: string | number | null = null;

  dataSource: any[] = [{ 
                  id: 2,
                  name: "teat",
                  description: "sfsf",
                  step_counter: 12,
                  // users: any[]// [{id:1, name:"testttt", description: "dfd",step_counter:1}]
                }
              ];

  selectedItems: T[] = [];
  isLoading = false;
  totalScore = 0 ;

  columns: ListColumn[] = [] ;
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  
  }

  protected constructor(
    @Inject(Object) protected readonly entityService: S,
    injector: Injector,
    ) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.notificationService = injector.get(NotificationService);
    this.routeTitle = this.activatedRoute.snapshot.data.title;
  }


  ngOnInit(){
    this.refresh()
  }

  refresh(): void{
    const team_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    try {
      if(team_id){
        this.getAllById(Number(team_id));
      }else{
        this.getAll();
      }
      this.isLoading = false;
    } catch (error) {
      this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
    }
  }

  getAll(): void{
    this.subscription = this.entityService.getAll().subscribe(
      result => {
        this.dataSource = result;
      },
      error => {
        this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
      }
    );
  }

  getAllById(team_id: number): void{
    this.subscription = this.entityService.getAllUsersByTeamId(team_id).subscribe(
      result => {
        this.dataSource = result;
      },
      error => {
        this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
      }
    );
  }


  async detail(item: T): Promise<void> {
    await this.router.navigate(['teams/', item.id], { relativeTo: this.activatedRoute });
  }

  add(item: T): void {
    this.subscription = this.entityService.create(item).subscribe(
      result => {
        const title = this.routeTitle;
        const messagePrefix =new CapitalizePipe().transform(title.toLowerCase());
        this.notificationService.success(title, `${messagePrefix} successfully created.`);
      },
      error => {
        this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
      }
    );
  }

  async getTotalScore() {

    this.subscription = this.entityService.getTotalScore().subscribe(
      result => {
        this.totalScore = result;
      },
      error => {
        this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
      }
    );
  }

}
