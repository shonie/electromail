import { createSelector } from 'reselect';
import { Letter } from '../types';
import { RootState } from '../reducers';

export const getLetters = (state: RootState) => state.letters.list;

export const getCurrentFolder = (state: RootState) => state.folders.current;

export const getLettersFromFolder = createSelector(
    [getLetters, getCurrentFolder],
    (letters: Letter[], folder: string) => letters.filter((l: Letter) => l.category === folder)
);
