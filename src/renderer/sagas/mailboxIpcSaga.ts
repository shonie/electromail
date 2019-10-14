import { take, call, put, takeLatest } from 'redux-saga/effects';
import { ipcRenderer } from 'electron';
import { LETTERS_REQUESTED, LETTERS_RECEIVED, lettersReceived } from '../actions/lettersActions';
import createIpcChannel from './createIpcChannel';

function* watchRequestedLetters() {
    const ipcChannel = yield call(createIpcChannel, ipcRenderer, LETTERS_RECEIVED);

    yield call(() => ipcRenderer.send(LETTERS_REQUESTED));

    while (true) {
        try {
            const letters = yield take(ipcChannel);
            // An error from ipcChannel will cause the saga jump to the catch block
            yield put(lettersReceived(letters));
        } catch (err) {
            // ipcChannel is still open in catch block
            // if we want end the ipcChannel, we need close it explicitly
            ipcChannel.close();
        }
    }
}

export default function* mailboxSaga() {
    yield takeLatest(LETTERS_REQUESTED, watchRequestedLetters);
}
