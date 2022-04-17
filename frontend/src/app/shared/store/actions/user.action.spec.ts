import { IUser } from '../../model/user.model';
import { AddUserAction, UpdateUserAction} from './user.action';

describe('Store: User Actions', () => {
    const item:IUser = {
        id: 23652,
        name: 'user name',
        description: null,
        step_counter: 1,
    };

    it('should create an AddUserAction Action', () => {
        expect(AddUserAction({ entity: item}) ).toBeTruthy();
    });
    it('should create a UpdateUserAction Action', () => {
         expect(UpdateUserAction({ entity: item})).toBeTruthy();
    });
});