import { IUser } from '../../model/user.model';
import { AddTeamAction} from './team.action';

describe('Store: Team Actions', () => {
    const item:IUser = {
        id: 23652,
        name: 'team name',
        description: null,
        step_counter: 1,
    };

    it('should create an AddTeamAction Action', () => {
        expect(AddTeamAction({ entity: item}) ).toBeTruthy();
    });

});