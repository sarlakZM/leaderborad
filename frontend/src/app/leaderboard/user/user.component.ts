
import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BaseListComponent } from '../../shared/component/base-list.component';
import { ListColumn } from 'src/app/shared/model/list-column.model';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from 'src/app/shared/service/user.service';
import { IUser } from 'src/app/shared/model/user.model';
import { from, map, scan } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseListComponent<IUser, UserService> implements OnInit {


  constructor(userService: UserService, 
              injector: Injector, 
              public dialog: MatDialog,
              private changeDetectorRef: ChangeDetectorRef,
              ) {
    super(userService, injector);
    this.columns = [
      { name: 'NAME', property: 'name', visible: true, deactivatable: false, isModelProperty: true },
      { name: 'DESCRIPTION', property: 'description', visible: true, deactivatable: false, isModelProperty: true},
      { name: 'Step Counter', property: 'step_counter', visible: true, deactivatable: false, isModelProperty: true},
      { name: 'ACTION', property: 'actions', visible: true, deactivatable: false , isModelProperty: false},
    ] as ListColumn[];

  }

  openDialogAdd(): void{
    const dialogRef = this.dialog.open(UserFormComponent, {
      disableClose: true,
      data:{ 
        titleForm: this.routeTitle ? this.routeTitle.slice(0,-1) : 'IUser',
        team_id : this.team_id$
      }
    });
    dialogRef.afterClosed().subscribe( result => {
      this.refresh();
    });  
  }

  increasestep_counter(item: IUser){
    item.prev_step_counter = item.step_counter;
    item.step_counter = ++(item.step_counter as number) || 1;
     this.update(item);
    }

}


