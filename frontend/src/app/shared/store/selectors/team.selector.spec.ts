import { AppState } from "../states/";
import { selectTeams, selectTotalScoreTeams } from "./team.selector";

describe("Store: Team Selector", () => {
    const initialState: AppState = {
        teams: {
        entities: [
            {id: 1, name: 'team name 1', description: null, step_counter: 1 },
            {id: 2, name: 'team name 2', description: null, step_counter: 2 }
        ],
        isLoading: false,
        error: '',
        },
        users: {
        entities: [
        ],
        isLoading: false,
        error: '',
        }
    
    };

    it("should select Teams", () => {
        const teams = selectTeams.projector(initialState);
        expect(teams.length).toEqual(2);
        expect(teams[0].id).toEqual(1);
    });

    it("should select total Score Teams", () => {
        const totalScore = selectTotalScoreTeams.projector(initialState);
        expect(totalScore).toEqual(3);
    });
});    