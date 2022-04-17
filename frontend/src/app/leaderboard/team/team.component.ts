
import { Component, OnInit } from '@angular/core';
import { ITeam } from '../../shared/model/team.model';
import { ListColumn } from 'src/app/shared/model/list-column.model';
import {MatDialog} from '@angular/material/dialog';
import { TeamFormComponent } from './team-form/team-form.component';
import { Observable, of, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/shared/store/states/';
import { ActionsTeam } from 'src/app/shared/store/actions/';
import { fromTeam } from 'src/app/shared/store/selectors/';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit { 
  protected subscription$! : Subscription;
  dataSource$!: Observable<ITeam[]>;
  routeTitle!: string;
  totalScore$: Observable<number> = of(0) ;
  isLoading$!:Observable<boolean>;

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
    private router: Router
    ) {
      this.routeTitle = activatedRoute.snapshot.data['title']
      this.dataSource$ = this.store.pipe(select(fromTeam.selectTeams));
      this.totalScore$ = this.store.pipe(select(fromTeam.selectTotalScoreTeams));
  }

  ngOnInit(){
    this.refresh();
  }

  refresh(): void{
    this.store.dispatch(ActionsTeam.GetTeamsAction()); 
  }

  openDialogAdd(): void{
    const dialogRef = this.dialog.open(TeamFormComponent, {
      disableClose: true,
      data:{ titleForm: this.routeTitle? this.routeTitle.slice(0,-1) : 'ITeam' }
    });
    dialogRef.afterClosed().subscribe( result => {
      this.refresh();
    });  
  }

  async detail(item: ITeam): Promise<void> {
    await this.router.navigate(['teams/', item.id], { relativeTo: this.activatedRoute });
  }

}

