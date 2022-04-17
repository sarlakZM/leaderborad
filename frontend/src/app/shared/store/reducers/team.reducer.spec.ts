import * as _ from 'lodash';

import { ActionsTeam } from "../actions/";
import { initialUserState, TeamState } from "../states/";
import * as fromTeamReducer from './team.reducer'

  
  describe('Store: Team Reducer', () => {
    const item = {id: 23652, name: 'team name', description: null, step_counter: 1 };  
    const expectedState = _.cloneDeep(initialUserState);
    expectedState.entities.push(item);

    it('unknown action: should return the default state', () => {
        const initialState  = initialUserState;
        const action = {
          type: 'Unknown',
        };
        const state = fromTeamReducer.teamReducer(initialUserState, action);
   
        expect(state).toBe(initialState);
    });

    it('should retrieve all teams and update the state in an immutable way', () => {
      const initialState  = initialUserState;
      const newState: TeamState= {
        entities: [
            {id: 1, name: 'team name 1', description: null, step_counter: 3 },
            {id: 2, name: 'team name 1', description: null, step_counter: 1 },
        ],
        isLoading: false,
        error: ''
      };
      const action = ActionsTeam.GetTeamsActionSuccess({ entities: newState.entities });
      const state = fromTeamReducer.teamReducer(initialState, action);
 
      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });

    it('called with AddTeamActionSuccess action should return a state with the added team', () =>
      {    
        expect(fromTeamReducer.teamReducer(initialUserState,ActionsTeam.AddTeamActionSuccess({entity: item})))
          .toEqual(expectedState);
      }
    )
  

  })