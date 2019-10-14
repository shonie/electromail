import { combineReducers } from 'redux';
import { LettersState, lettersReducer } from './lettersReducer';
import { FoldersState, foldersReducer } from './foldersReducer';

export interface RootState {
    letters: LettersState;
    folders: FoldersState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    letters: lettersReducer,
    folders: foldersReducer
});
