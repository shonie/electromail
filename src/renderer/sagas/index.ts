import { fork } from 'redux-saga/effects';
import mailbox from './mailbox';

export default function* rootSaga() {
    yield fork(mailbox);
}
