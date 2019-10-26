import { fork } from 'redux-saga/effects';
import mailboxIpcSaga from './mailboxIpcSaga';
import saveLetterSaga from './saveLetter';
import letterCrud from './letterCrud';
import logger from './logger';

export default function* rootSaga() {
    yield fork(mailboxIpcSaga);
    yield fork(logger);
    yield fork(letterCrud);
    yield fork(saveLetterSaga);
}
