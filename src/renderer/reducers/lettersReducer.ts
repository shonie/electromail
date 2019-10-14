import { createReducer } from 'redux-create-reducer';
import keyBy from 'lodash.keyby';
import {
    LETTERS_REQUESTED,
    LETTERS_RECEIVED,
    LettersActions,
    LettersReceivedAction,
    LettersRequestedAction
} from '../actions/lettersActions';
import { Letter, HashMap } from '../types';

export interface LettersState {
    readonly list: Letter[];
    readonly map: HashMap<Letter>;
}

const defaultState: LettersState = {
    list: [],
    map: {}
};

export const lettersReducer = createReducer<LettersState, LettersActions>(defaultState, {
    [LETTERS_REQUESTED]: (state: LettersState, _: LettersRequestedAction) => state,
    [LETTERS_RECEIVED]: (state: LettersState, action: LettersReceivedAction) => ({
        ...state,
        letters: state.list.concat(action.payload),
        map: {
            ...state.map,
            ...keyBy(action.payload, (l: Letter) => l.id)
        }
    })
});
