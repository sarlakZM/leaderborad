import { ActionsUser } from "../actions/";
import { initialUserState } from "../states/";
import { createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';

export const userReducer = createReducer(
    initialUserState,
    on(ActionsUser.GetUsersActionSuccess,(state, {entities}) => ({ ...state, entities, isLoading: false })),
    on(ActionsUser.GetUsersAction,(state) => ({ ...state, isLoading: false })),
    on(ActionsUser.UpdateUserActionSuccess,(state, {entity}) => {
      let entities =  _.cloneDeep(state.entities)
      entities.map(item => {
        item.id === entity.id && item.team_id == entity.item_id  && (item= entity) ;
        return item;
      })
      return ({ ...state, entities, isLoading: false })
    }),
    on(ActionsUser.UpdateUserActionFail,(state, {error}) => ({ ...state, error, isLoading: true })),
    on(ActionsUser.AddUserActionSuccess,(state, {entity}) => {
      const entities = [...state.entities, entity]
      return ({ ...state, entities, isLoading: false })
    }),
    on(ActionsUser.AddUserActionFail,(state, {error}) => ({ ...state, error, isLoading: true })),
   
  );

