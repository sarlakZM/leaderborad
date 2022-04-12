import { createFeature, createReducer, on } from '@ngrx/store';

import { initialDataState } from './states';
import * as actions from './actions';


export const getTotalScoreReducerFeature = createFeature({
    name: 'total_score',
    reducer: createReducer(
    initialDataState,
      on(actions.GetTotalScore, (state) => ({
        ...state,
      })),
    ),
  });
