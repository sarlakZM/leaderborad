import { createAction, props } from '@ngrx/store';

export enum ActionsNames {
    GetTotalScore= '[Data] Get Total Score',
}


export const GetTotalScore = createAction(
    ActionsNames.GetTotalScore,
    // props<{ total_score: number}>()
 );

