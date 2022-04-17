import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';

import { TeamService } from "../../service/team.service";
import { ActionsTeam } from "../actions/";
 
@Injectable()
export class TeamEffects {
 
  GetTeamsAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionsTeam.GetTeamsAction),
      exhaustMap(() => this.service.getAll()
        .pipe(
          map(entities => ActionsTeam.GetTeamsActionSuccess({ entities })),
          catchError((error) => of(ActionsTeam.GetTeamsActionFail({error})))
        )
      )
    )
  );
  AddUserAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionsTeam.AddTeamAction),
        mergeMap(({entity}) => this.service.create(entity)
          .pipe(
            map(entity => (ActionsTeam.AddTeamActionSuccess({ entity }))),
            catchError((error) => of(ActionsTeam.AddTeamActionFail({error})))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private service: TeamService
  ) {}
}
