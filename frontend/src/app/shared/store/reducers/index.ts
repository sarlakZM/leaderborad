import * as fromUser from './user.reducer';
import * as fromTeam from './team.reducer';
import { AppState } from '../states/';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

/**
* Register the reducers for the AppState
*/
export const reducers:
    ActionReducerMap<AppState> = {
        users: fromUser.userReducer,
        teams: fromTeam.teamReducer
    }


export const metaReducers: MetaReducer<AppState>[] = [];
