import { DELETED } from './../constants/letterCategories';
import { createReducer } from 'redux-create-reducer';
import keyBy from 'lodash.keyby';
import mapValues from 'lodash.mapvalues';
import {
    LETTERS_REQUESTED,
    LETTERS_RECEIVED,
    SET_CURRENT_LETTER,
    CLEAR_MAILBOX,
    UPDATE_LETTER,
    DELETE_LETTER,
    LettersActions,
    LettersReceivedAction,
    LettersRequestedAction,
    SetCurrentLetterAction,
    ClearMailboxAction,
    UpdateLetterAction,
    DeleteLetterAction
} from '../actions/lettersActions';
import { Letter, HashMap } from '../types';
import * as categories from '../constants/letterCategories';

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
    }),
    [UPDATE_LETTER]: (state: LettersState, action: UpdateLetterAction) => ({
        ...state,
        list: state.list.map((l: Letter) =>
            action.letterId === l.id ? { ...l, ...action.payload } : l
        ),
        map: {
            ...state.map,
            [action.letterId]: {
                ...state.map[action.letterId],
                ...action.payload
            }
        }
    }),
    [DELETE_LETTER]: (state: LettersState, action: DeleteLetterAction) => ({
        ...state,
        list: state.list.map((l: Letter) =>
            action.letterId === l.id ? { ...l, deleted: true, category: categories.DELETED } : l
        ),
        map: mapValues(state.map, (l: Letter) =>
            l.id === action.letterId ? { ...l, deleted: true, category: categories.DELETED } : l
        ),
        current: action.letterId === state.current ? null : state.current
    })
});
