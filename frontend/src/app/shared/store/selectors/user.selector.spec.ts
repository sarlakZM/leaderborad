import { AppState } from "../states/";
import { selectUsers, selectTotalScoreUsers } from "./user.selector";

describe("Store: User Selector", () => {
    const initialState: AppState = {
        teams: {
            entities: [],
            isLoading: false,
            error: '',
        },
        users: {
            entities: [
                {id: 1, name: 'user name 1', description: null, step_counter: 3, team_id: 1 },
                {id: 2, name: 'user name 1', description: null, step_counter: 1, team_id: 1 },
            ],
            isLoading: false,
            error: '',
        }
    
    };

    it("should select Users", () => {
        const state = selectUsers.projector(initialState);
        expect(state.length).toEqual(2);
        expect(state[0].id).toEqual(1);
    });

    it("should select total Score Users", () => {
        const totalScore = selectTotalScoreUsers.projector(initialState);
        expect(totalScore).toEqual(4);
    });


});    