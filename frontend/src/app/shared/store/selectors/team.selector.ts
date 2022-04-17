import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITeam } from "../../model/team.model";
import { AppState } from "../states/";


export const selectFeature = createFeatureSelector<AppState>('appState');

export const selectTeams = createSelector(
    selectFeature,
    (state: AppState): ITeam[] => state.teams.entities);

export const selectTotalScoreTeams = createSelector(
    selectFeature,
    (state: AppState): number => {
        const total_score = state.teams.entities.reduce((total_score,team) => total_score + (team.step_counter as number), 0)
        return total_score
    });