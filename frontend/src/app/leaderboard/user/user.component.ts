
import { Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { map, Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { ActionsUser } from 'src/app/shared/store/actions/';
import { fromUser } from 'src/app/shared/store/selectors/';
import { AppState } from 'src/app/shared/store/states';
import { ListColumn } from 'src/app/shared/model/list-column.model';
import { UserFormComponent } from './user-form/user-form.component';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  protected subscription$! : Subscription;
  dataSource: IUser[] = [];
  routeTitle!: string;
  totalScore$: Observable<number> = of(0) ;
  team_id: string | number | null = null;

  columns: ListColumn[] = [
    { name: 'NAME', property: 'name', visible: true, deactivatable: false, isModelProperty: true },
    { name: 'DESCRIPTION', property: 'description', visible: true, deactivatable: false, isModelProperty: true},
    { name: 'Step Counter', property: 'step_counter', visible: true, deactivatable: false, isModelProperty: true},
    { name: 'ACTION', property: 'actions', visible: true, deactivatable: false , isModelProperty: false},
  ] as ListColumn[];
  // Show columns in table
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property); 
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<AppState>,
    ) {
      this.routeTitle = activatedRoute.snapshot.data['title']
      this.subscription$ = this.activatedRoute.params.pipe(map((params) => params['id'])).
      subscribe(id => this.team_id= id);
      this.store.pipe(select(fromUser.selectUsers)).subscribe(res => this.dataSource = res );
      this.totalScore$ = this.store.pipe(select(fromUser.selectTotalScoreUsers))
  }

  ngOnInit(){
    this.refresh();
  }
 
  refresh(): void{
    this.store.dispatch(ActionsUser.GetUsersAction({team_id:this.team_id}));
    this.store.pipe(select(fromUser.selectUsers)).subscribe(res => this.dataSource = res );
    this.totalScore$ = this.store.pipe(select(fromUser.selectTotalScoreUsers))
  }

  openDialogAdd(): void{
    const dialogRef = this.dialog.open(UserFormComponent, {
      disableClose: true,
      data:{ 
        titleForm: this.routeTitle ? this.routeTitle.slice(0,-1) : 'IUser',
        team_id : this.team_id
      }
    });
    dialogRef.afterClosed().subscribe( result => {
      this.refresh();
    });  
  }
  
  increasestep_counter(item_: IUser){
    Object.assign({}, item_);
    const item = { ...item_ }; 
    item.prev_step_counter = item.step_counter;
    item.step_counter = ++(item.step_counter as number) || 1;
    this.update(item);
  }

  update(item: IUser): void {
    this.store.dispatch(ActionsUser.UpdateUserAction({entity: item}));
    this.refresh();
    
  }


  ngOnDestroy(): void {
    this.subscription$ && this.subscription$.unsubscribe();
  }

}

