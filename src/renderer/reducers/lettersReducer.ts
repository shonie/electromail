import { createReducer } from 'redux-create-reducer';
import keyBy from 'lodash.keyby';
import {
    LETTERS_REQUESTED,
    LETTERS_RECEIVED,
    SET_CURRENT_LETTER,
    CLEAR_MAILBOX,
    LettersActions,
    LettersReceivedAction,
    LettersRequestedAction,
    SetCurrentLetterAction,
    ClearMailboxAction
} from '../actions/lettersActions';
import { Letter, HashMap } from '../types';

export interface LettersState {
    readonly list: Letter[];
    readonly map: HashMap<Letter>;
    readonly current: string | null;
}

const defaultState: LettersState = {
    list: [],
    map: {},
    current: null
};

export const lettersReducer = createReducer<LettersState, LettersActions>(defaultState, {
    [LETTERS_REQUESTED]: (state: LettersState, _: LettersRequestedAction) => state,
    [LETTERS_RECEIVED]: (state: LettersState, action: LettersReceivedAction) => ({
        ...state,
        list: state.list.concat(action.payload),
        map: {
            ...state.map,
            ...keyBy(action.payload, (l: Letter) => l.id)
        }
    }),
    [SET_CURRENT_LETTER]: (state: LettersState, action: SetCurrentLetterAction) => ({
        ...state,
        current: action.payload
    }),
    [CLEAR_MAILBOX]: (state: LettersState, _: ClearMailboxAction) => ({
        ...state,
        list: [],
        map: {}
    })
});
