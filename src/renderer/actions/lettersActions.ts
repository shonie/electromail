import { Action, ActionCreator } from 'redux';
import { Letter } from '../types';

export const LETTERS_REQUESTED = 'LETTERS_REQUESTED';
export const LETTERS_RECEIVED = 'LETTERS_RECEIVED';
export const SET_CURRENT_LETTER = 'SET_CURRENT_LETTER';
export const CLEAR_MAILBOX = 'CLEAR_MAILBOX';

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

export type LettersActions =
    | LettersRequestedAction
    | LettersReceivedAction
    | SetCurrentLetterAction
    | ClearMailboxAction;
