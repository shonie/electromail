import { Action, ActionCreator } from 'redux';
import { Letter } from '../types';

export const LETTERS_REQUESTED = 'LETTERS_REQUESTED';
export const LETTERS_RECEIVED = 'LETTERS_RECEIVED';
export const SET_CURRENT_LETTER = 'SET_CURRENT_LETTER';
export const CLEAR_MAILBOX = 'CLEAR_MAILBOX';
export const UPDATE_LETTER = 'UPDATE_LETTER';
export const DELETE_LETTER = 'DELETE_LETTER';

export interface LettersRequestedAction extends Action {
    type: 'LETTERS_REQUESTED';
}
export interface LettersReceivedAction extends Action {
    type: 'LETTERS_RECEIVED';
    payload: Letter[];
}

export interface SetCurrentLetterAction extends Action {
    type: 'SET_CURRENT_LETTER';
    payload: string;
}

export interface ClearMailboxAction extends Action {
    type: 'CLEAR_MAILBOX';
}

export interface UpdateLetterAction extends Action {
    type: 'UPDATE_LETTER';
    letterId: string;
    payload: Partial<Letter>;
}

export interface DeleteLetterAction extends Action {
    type: 'DELETE_LETTER';
    letterId: string;
}

export const lettersRequested: ActionCreator<LettersRequestedAction> = () => ({
    type: LETTERS_REQUESTED
});

export const lettersReceived: ActionCreator<LettersReceivedAction> = (payload: Letter[]) => ({
    payload,
    type: LETTERS_RECEIVED
});

export const setCurrentLetter: ActionCreator<SetCurrentLetterAction> = (payload: string) => ({
    payload,
    type: SET_CURRENT_LETTER
});

export const clearMailbox: ActionCreator<ClearMailboxAction> = () => ({
    type: CLEAR_MAILBOX
});

export const updateLetter: ActionCreator<UpdateLetterAction> = (
    letterId: string,
    payload: Partial<Letter>
) => ({
    letterId,
    payload,
    type: UPDATE_LETTER
});

export const deleteLetter: ActionCreator<any> = (letterId: string) => ({
    letterId,
    type: DELETE_LETTER
});

export type LettersActions =
    | LettersRequestedAction
    | LettersReceivedAction
    | SetCurrentLetterAction
    | ClearMailboxAction
    | UpdateLetterAction
    | DeleteLetterAction;
