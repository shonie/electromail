import { Action, ActionCreator } from 'redux';
import { Letter } from '../types';

export const LETTERS_REQUESTED = 'LETTERS_REQUESTED';
export const LETTERS_RECEIVED = 'LETTERS_RECEIVED';

export interface LettersRequestedAction extends Action {
    type: 'LETTERS_REQUESTED';
}
export interface LettersReceivedAction extends Action {
    type: 'LETTERS_RECEIVED';
    payload: Letter[];
}

export const lettersRequested: ActionCreator<LettersRequestedAction> = () => ({
    type: LETTERS_REQUESTED
});

export const lettersReceived: ActionCreator<LettersReceivedAction> = (payload: Letter[]) => ({
    payload,
    type: LETTERS_RECEIVED
});

export type LettersActions = LettersRequestedAction | LettersReceivedAction;
