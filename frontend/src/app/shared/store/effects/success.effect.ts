import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { NotificationService } from "../../service/notification.service";
import { SystemMessages } from "../../support/system-messages";
import { ActionsTeam, ActionsUser } from "../actions/";


@Injectable()
export class SuccessEffects {

    requestSuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(
                ActionsUser.AddUserActionSuccess, 
                ActionsUser.UpdateUserActionSuccess, 
                // ActionsUser.GetUsersActionSuccess,
                ActionsTeam.AddTeamActionSuccess,
                // ActionsTeam.GetTeamsActionSuccess,
            ),
            tap((action: { entity?: string, entities?: any, type: any }) =>{
                switch (action.type) {
                  case ActionsUser.AddUserActionSuccess.type: {
                    this.notificationService.success('User: ', SystemMessages.addedSuccess);
                    break;
                  }
                  case ActionsUser.UpdateUserActionSuccess.type: {
                    this.notificationService.success('User: ', SystemMessages.updateSuccess);
                    break;
                  }
                  case ActionsTeam.AddTeamActionSuccess.type: {
                    this.notificationService.success('Team: ', SystemMessages.addedSuccess);
                    break;
                  }
                  default: { 
                    //statements; 
                    break; 
                 } 
                }
            })
          ),
        { dispatch: false }
    );
 
  constructor(
    private readonly actions$: Actions,
    private notificationService: NotificationService,
  ) {}

}
// AddUserAction$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(ActionsUser.AddUserAction),
//   mergeMap(({entity}) => this.service.create(entity)
//     .pipe(
//       map(entity => (ActionsUser.AddUserActionSuccess({ entity }))),
//       catchError((error) => of(ActionsUser.AddUserActionFail({error})))
//     )
//   )
// )
// );