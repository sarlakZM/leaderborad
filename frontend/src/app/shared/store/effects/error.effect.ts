import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { HandleErrorService } from "../../service/handleError.service";
import { NotificationService } from "../../service/notification.service";
import { ActionsTeam, ActionsUser } from "../actions/";

@Injectable()
export class ErrorEffects {

    requestFailed$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(
                ActionsUser.AddUserActionFail, 
                ActionsUser.GetUsersActionFail, 
                ActionsUser.UpdateUserActionFail,
                ActionsTeam.GetTeamsActionFail,
                ActionsTeam.AddTeamActionFail
            ),
            tap((action: { error: string }) =>{
                console.log(action.error)
                return this.handleErrorService(action.error)
             })
          ),
        { dispatch: false }
    );

    handleErrorService(error: any){
        let handleError = new HandleErrorService();
        let res = handleError.handleError(error)
        this.notificationService.error('An error occurred', JSON.stringify(res.result));
    }
    
 
  constructor(
    private readonly actions$: Actions,
    private notificationService: NotificationService,
  ) {}

}
