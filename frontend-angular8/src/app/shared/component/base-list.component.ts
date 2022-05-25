import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BaseMultiService } from '../api/base-multi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorUtils } from '../support/error.utils';
import { NotificationService } from '../service/notification.service';
import { ListColumn } from '../model/list-column.model';


export abstract class BaseListComponent<T extends { id?: number }, 
                                        S extends BaseMultiService<T> = BaseMultiService<T>>
  implements OnInit
{
  protected readonly activatedRoute: ActivatedRoute;
  protected readonly router: Router;
  protected readonly notificationService: NotificationService;
  public readonly routeTitle: string;

  dataSource: T[] = []
  selectedItems: T[] = [];
  isLoading: boolean = false;
  totalScore: number = 0 ;
  team_id: string | number | null = null;

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


  async ngOnInit(): Promise<void> {
    this.team_id = this.activatedRoute.snapshot.paramMap.get('id');
    await this.refresh();
    // await this.getTotalScore();
  }

  async refresh(): Promise<void> {
    this.isLoading = true;
    try {
      this.dataSource = await this.getAll();
      this.isLoading = false;
    } catch (error) {
      this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
    }
  }

  async getAll(): Promise<T[]> {
      if(this.team_id){
        return await this.entityService.getAllUsersByTeamId(Number(this.team_id));
      }else{
        return await this.entityService.getAll();

      }
  }

  
  trackById(index: number, item: T): number {
    return item.id as number;
  }

  async detail(item: T): Promise<void> {
    await this.router.navigate(['teams/', item.id], { relativeTo: this.activatedRoute });
  }


  async update(item: T): Promise<void> {
    await this.entityService.update(item.id, item);
  }

  // async add(item: T): Promise<T> {
  //   return await this.entityService.create(item);
  // }


  // async deleteSingle(item: T): Promise<void> {
  //   this.selectedItems = [item];
  //   // await this.entityService.delete();
  // }


}
