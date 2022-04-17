import { createAction, props } from "@ngrx/store";
import { ITeam } from "../../model/team.model";

 
export const GetTeamsAction = createAction(
    '[Team List/API] Get Teams',
);

export const GetTeamsActionSuccess = createAction(
    '[Team List/API] Get Teams Success',
    props<{ entities: ITeam[] }>()
);
  
export const GetTeamsActionFail = createAction(
    '[Team List/API] Get Teams Fail',
        props<{ error: any }>()
);

export const AddTeamAction = createAction(
    '[Team] Add Team',
    props<{ entity: ITeam }>()
);
  
export const AddTeamActionSuccess = createAction(
    '[Team] Add Team Success',
    props<{ entity: any }>()
);
  
export const AddTeamActionFail = createAction(
    '[Team] Add Team Fail',
    props<{ error: any }>()
);
  
