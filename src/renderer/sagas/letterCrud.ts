import { takeLatest, put, delay, race, take } from 'redux-saga/effects';
import {
    SET_CURRENT_LETTER,
    UPDATE_LETTER,
    SetCurrentLetterAction,
    LettersActions,
    updateLetter
} from '../actions/lettersActions';

function* delayedReadLetter(action: SetCurrentLetterAction) {
    const { markAsRead } = yield race({
        undo: take(
            (action: LettersActions) =>
                action.type === SET_CURRENT_LETTER || action.type === UPDATE_LETTER
        ),
        markAsRead: delay(2000)
    });

    if (markAsRead) {
        yield put(
            updateLetter(action.payload, {
                isRead: true
            })
        );
    }
}

export default function* lettersCrudSaga() {
    yield takeLatest(SET_CURRENT_LETTER, delayedReadLetter);
}
