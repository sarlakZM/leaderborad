import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from "../../service/user.service";
import { ActionsUser } from "../actions/";
 
@Injectable()
export class UserEffects {
  GetUsersAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionsUser.GetUsersAction),
      mergeMap(({team_id}) => this.service.getAllUsersByTeamId(team_id)
        .pipe(
          map(entities => (ActionsUser.GetUsersActionSuccess({ entities }))),
          catchError((error) => of(ActionsUser.GetUsersActionFail({error})))
        )
      )
    ),  
  );
  UpdateUserAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionsUser.UpdateUserAction),
      mergeMap(({entity}) => this.service.update(entity.id, entity)
        .pipe(
          map(entity => (ActionsUser.UpdateUserActionSuccess({ entity }))),
          catchError((error) => of(ActionsUser.UpdateUserActionFail({error})))
        )
      )
    )
  )
  AddUserAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionsUser.AddUserAction),
      mergeMap(({entity}) => this.service.create(entity)
        .pipe(
          map(entity => (ActionsUser.AddUserActionSuccess({ entity }))),
          catchError((error) => of(ActionsUser.AddUserActionFail({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: UserService,
  ) {}
}



