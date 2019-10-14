import { stdChannel } from 'redux-saga';
import { ipcMain } from 'electron';
import { takeLatest } from 'redux-saga/effects';
import { LETTERS_REQUESTED } from './../actions/lettersActions';
import mailboxIpcSaga from './mailboxIpcSaga';

export default function* mailboxSaga() {
    yield takeLatest(LETTERS_REQUESTED, mailboxIpcSaga);
}
