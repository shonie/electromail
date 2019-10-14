import { takeLatest, call, put } from 'redux-saga/effects';
import {
    LETTERS_REQUESTED,
    LettersRequestedAction,
    lettersReceived
} from './../actions/lettersActions';
import { Letter } from '../types';
import stubLetters from '../stubs/stubLetters';

function* fetchLetters(_: LettersRequestedAction) {
    const response: Letter[] = stubLetters;
    yield put(lettersReceived(response));
}

export default function* mailboxSaga() {
    yield takeLatest(LETTERS_REQUESTED, fetchLetters);
}
