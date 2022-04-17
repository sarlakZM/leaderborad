import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "../../model/user.model";
import { AppState } from "../states/";


export const selectFeature = createFeatureSelector<AppState>('appState');

export const selectUsers = createSelector(
    selectFeature,
    (state: AppState): IUser[] => state.users.entities);
    
export const selectTotalScoreUsers = createSelector(
    selectFeature,
    (state: AppState): number => {
        const total_score = state.users.entities.reduce((total_score,team) => total_score + (team.step_counter as number), 0)
        return total_score
    });
