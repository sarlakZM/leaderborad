

export const FEATURE_KEY = 'feature_total_score';


export interface TotalScoreState {
    total_score: number;
}
 
export interface AppState {
  feature_total_score: TotalScoreState;
}


export const initialDataState: TotalScoreState = {
    total_score: 0,
};
