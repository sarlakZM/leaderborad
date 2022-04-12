import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import { AppState, FEATURE_KEY, TotalScoreState } from './states';


export const totalScoreSelector = createFeatureSelector<State<TotalScoreState>>(FEATURE_KEY);

export const getTotalScoreSelector = (dataSource:any) => createSelector(
    totalScoreSelector,
    (total_score) => {
        return dataSource.reduce( (total_score:number, item:any) => total_score + (item.step_counter as number) ,0);
    }
)
