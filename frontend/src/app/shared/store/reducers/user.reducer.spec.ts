import * as _ from 'lodash';

import { ActionsUser } from "../actions/";
import { initialUserState, UserState } from "../states/";
import * as fromUserReducer from './user.reducer'

  
describe('Store: User Reducer', () => {
  const item = {id: 23652, name: 'user name', description: null, step_counter: 1 };  
  const expectedState = _.cloneDeep(initialUserState);
  expectedState.entities.push(item);

  it('unknown action: should return the default state', () => {
      const initialState  = initialUserState;
      const action = {
        type: 'Unknown',
      };
      const state = fromUserReducer.userReducer(initialUserState, action);
  
      expect(state).toBe(initialState);
  });

  it('should retrieve all users and update the state in an immutable way', () => {
    const initialState  = initialUserState;
    const newState: UserState= {
      entities: [
          {id: 1, name: 'user name 1', description: null, step_counter: 3, team_id: 1 },
          {id: 2, name: 'user name 1', description: null, step_counter: 1, team_id: 1 },
      ],
      isLoading: false,
      error: ''
    };
    const action = ActionsUser.GetUsersActionSuccess({ entities: newState.entities });
    const state = fromUserReducer.userReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('called with AddUserActionSuccess action should return a state with the added user', () =>
    {    
      expect(fromUserReducer.userReducer(initialUserState,ActionsUser.AddUserActionSuccess({entity: item})))
        .toEqual(expectedState);
    }
  )

  it('called with UpdateUserActionSuccess action should return a state with the correct user updated', () =>
    {
      
      expect(fromUserReducer.userReducer(initialUserState,ActionsUser.AddUserActionSuccess({entity: item})))
        .toEqual(expectedState);

      const initialUserStateAfterAdded = expectedState;
      const itemUpdated = {id: 23652, name: 'user name', description: null, step_counter: 2, prev_step_counter: 1 };
      const expectedStateUpdated = _.cloneDeep(initialUserStateAfterAdded);
      expectedStateUpdated.entities.map( entity =>{
          entity.id === item.id && (entity = itemUpdated) ;
          return entity;
      })
      expect(fromUserReducer.userReducer(initialUserStateAfterAdded,ActionsUser.UpdateUserActionSuccess({entity: itemUpdated})))
        .toEqual(expectedStateUpdated);


    }
  )
})