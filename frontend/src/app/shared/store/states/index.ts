import { ITeam } from "../../model/team.model";
import { IUser } from "../../model/user.model";



export interface EntityState<T> {
	entities: T[];
	isLoading: boolean;
	error: any
	// total_score : number;
}

export interface UserState extends EntityState<IUser> {}
export interface TeamState extends EntityState<ITeam> {}

export const initialUserState : UserState= {
	entities: [],
	isLoading: false,
	error: ''
}


export const initialTeamState : TeamState = {
	entities: [],
	isLoading: false,
	error: ''
}


export interface AppState {
	users:	UserState;
	teams:	TeamState;
};

export const initialAppState : AppState = {
	users: initialUserState,
	teams : initialTeamState
}
