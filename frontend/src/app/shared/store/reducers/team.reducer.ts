import { ActionsTeam } from "../actions/";
import { initialTeamState } from "../states/";
import { createReducer, on } from '@ngrx/store';

export const teamReducer = createReducer(
    initialTeamState,
    on(ActionsTeam.GetTeamsActionSuccess, (state, {entities}) =>({ ...state, entities, isLoading: false })),
    on(ActionsTeam.GetTeamsAction,(state) => ({ ...state, isLoading: false })),
    on(ActionsTeam.AddTeamActionSuccess,(state, {entity}) => {
      const entities = [...state.entities, entity]
      return ({ ...state, entities, isLoading: false })
    }),
    on(ActionsTeam.AddTeamActionFail,(state, {error}) => ({ ...state, error, isLoading: true })),
  );

