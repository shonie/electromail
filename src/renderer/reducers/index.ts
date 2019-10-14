import { combineReducers } from 'redux';

import { LettersState, lettersReducer } from './lettersReducer';

export interface RootState {
    letters: LettersState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    letters: lettersReducer
});
