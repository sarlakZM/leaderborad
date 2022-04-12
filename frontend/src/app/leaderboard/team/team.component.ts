
import { Component, Injector } from '@angular/core';
import { BaseListComponent } from '../../shared/component/base-list.component';
import { ITeam } from '../../shared/model/team.model';
import { TeamService } from '../../shared/service/team.service';
import { ListColumn } from 'src/app/shared/model/list-column.model';
import {MatDialog} from '@angular/material/dialog';
import { TeamFormComponent } from './team-form/team-form.component';
import { from, map, scan } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent extends BaseListComponent<ITeam, TeamService> {

  constructor(teamService: TeamService, injector: Injector, public dialog: MatDialog,
    ) {
    super(teamService, injector);
    this.columns = [
      { name: 'NAME', property: 'name', visible: true, deactivatable: false, isModelProperty: true },
      { name: 'DESCRIPTION', property: 'description', visible: true, deactivatable: false, isModelProperty: true},
      { name: 'Step Counter', property: 'step_counter', visible: true, deactivatable: false, isModelProperty: true},
      { name: 'ACTION', property: 'actions', visible: true, deactivatable: false , isModelProperty: false},
    ] as ListColumn[];

  }


  openDialogAdd(): void{
    const dialogRef = this.dialog.open(TeamFormComponent, {
      disableClose: true,
      data:{ titleForm: this.routeTitle ? this.routeTitle.slice(0,-1) : 'ITeam' }
    });
    dialogRef.afterClosed().subscribe( result => {
      this.refresh();
    });  
  }

}

