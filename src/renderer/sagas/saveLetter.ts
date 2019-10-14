import {
    SAVE_LETTER_TO_DISK,
    LETTER_SAVED_TO_DISK,
    SaveLetterToDiskAction,
    letterSavedToDisk
} from './../actions/lettersActions';
import { put, call, take, takeLatest } from 'redux-saga/effects';
import createIpcChannel from './createIpcChannel';
import { ipcRenderer } from 'electron';

function* saveFileByIpc(action: SaveLetterToDiskAction) {
    const ipcChannel = yield call(createIpcChannel, ipcRenderer, LETTER_SAVED_TO_DISK);

    yield call(() => ipcRenderer.send(SAVE_LETTER_TO_DISK, action.payload));

    while (true) {
        try {
            yield take(ipcChannel);
            // An error from ipcChannel will cause the saga jump to the catch block
            yield put(letterSavedToDisk());
        } catch (err) {
            // ipcChannel is still open in catch block
            // if we want end the ipcChannel, we need close it explicitly
            ipcChannel.close();
        }
    }
}
export default function* saveLetter() {
    yield takeLatest(SAVE_LETTER_TO_DISK, saveFileByIpc);
}
