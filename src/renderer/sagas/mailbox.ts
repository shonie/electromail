import { takeLatest, call, put } from 'redux-saga/effects';
import {
    LETTERS_REQUESTED,
    LettersRequestedAction,
    lettersReceived
} from './../actions/lettersActions';
import { Letter } from '../types';

function* fetchLetters(_: LettersRequestedAction) {
    const response: Letter[] = [];

    yield put(lettersReceived(response));
}
export default function* mailboxSaga() {
    takeLatest(LETTERS_REQUESTED, fetchLetters);
}
