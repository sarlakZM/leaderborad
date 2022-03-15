
import { ChangeDetectorRef, Component, Injector } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BaseListComponent } from '../../shared/component/base-list.component';
import { ListColumn } from 'src/app/shared/model/list-column.model';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from 'src/app/shared/api/user.service';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseListComponent<IUser, UserService> {

  columns : ListColumn[] = [
    { name: 'NAME', property: 'name', visible: true, deactivatable: false, isModelProperty: true },
    { name: 'DESCRIPTION', property: 'description', visible: true, deactivatable: false, isModelProperty: true},
    { name: 'Step Counter', property: 'step_counter', visible: true, deactivatable: false, isModelProperty: true},
    { name: 'ACTION', property: 'actions', visible: true, deactivatable: false },
  ] as ListColumn[];

  constructor(userService: UserService, 
              injector: Injector, 
              public dialog: MatDialog,
              private changeDetectorRef: ChangeDetectorRef,
              ) {
    super(userService, injector);
    this.getTotalScore();
  }

  openDialogAdd(): void{
    const dialogRef = this.dialog.open(UserFormComponent, {
      disableClose: true,
      data:{ 
        titleForm: this.routeTitle ? this.routeTitle.slice(0,-1) : 'IUser',
        team_id : this.team_id
      }
    });
    dialogRef.afterClosed().subscribe( async result => {
      await this.refresh();
      await this.getTotalScore();
      this.changeDetectorRef.detectChanges();
    });  
  }

  ngOnDestroy(): void {
    this.dialog.closeAll();  
  }

  async increasestep_counter(item: IUser): Promise<void>{
    item.prev_step_counter = item.step_counter;
    ++item.step_counter;
    await this.update(item);
    await this.refresh();
    await this.getTotalScore();
  }

  async getTotalScore(): Promise<void> {
    const items: IUser[] = await this.getAll();
    let sum: number = 0;
    for(let item of items){
      sum += item.step_counter;
    }
    this.totalScore = sum;
  }

}


