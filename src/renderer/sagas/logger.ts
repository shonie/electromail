import { Action } from 'redux';
import { takeEvery, select } from 'redux-saga/effects';

function* logAction(action: Action) {
    console.group(action.type);
    console.log('Action', action);
    const state = yield select();
    console.log('Next state', state);
    console.groupEnd();
}

export default function* actionWatcher() {
    yield takeEvery('*', logAction);
}
