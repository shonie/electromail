import { fork } from 'redux-saga/effects';
import mailboxIpcSaga from './mailboxIpcSaga';
import saveLetterSaga from './saveLetter';
import logger from './logger';

export default function* rootSaga() {
    yield fork(mailboxIpcSaga);
    yield fork(logger);
    yield fork(saveLetterSaga);
}
