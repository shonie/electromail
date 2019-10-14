import { fork } from 'redux-saga/effects';
import mailbox from './mailbox';
import logger from './logger';

export default function* rootSaga() {
    yield fork(mailbox);
    yield fork(logger);
}
