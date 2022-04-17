import { createAction, props } from "@ngrx/store";
import { IUser } from "../../model/user.model";


export const GetUsersAction = createAction(
    '[User List/API] Get Users',
    props<{ team_id: any }>()
  );
  
export const GetUsersActionSuccess = createAction(
    '[User List/API] Get Users Success',
    props<{ entities: IUser[] }>()
);
  
export const GetUsersActionFail = createAction(
    '[User List/API] Get Users Fail',
        props<{ error: any }>()
);
  
export const AddUserAction = createAction(
    '[User] Add User',
    props<{ entity: IUser }>()
);

export const AddUserActionSuccess = createAction(
    '[User] Add User Success',
    props<{ entity: any }>()
);
  
export const AddUserActionFail = createAction(
    '[User] Add User Fail',
    props<{ error: any }>()
);

export const UpdateUserAction = createAction(
    '[User] Update User',
    props<{ entity: IUser }>()
);

export const UpdateUserActionSuccess = createAction(
    '[User] Update User Success',
    props<{ entity: any }>()
);
  
export const UpdateUserActionFail = createAction(
    '[User] Update User Fail',
        props<{ error: any }>()
);
// export const GetTotalScoreUsersAction = createAction(
//     '[User] Get Total Score Users',
//     // props<{ payload: IUser[] }>()
// );
  
 