import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ipcRenderer, IpcRenderer } from 'electron';
import { LETTERS_REQUESTED, LETTERS_RECEIVED, lettersReceived } from '../actions/lettersActions';

// this function creates an event channel from a given socket
// Setup subscription to incoming `LETTERS_RECEIVED` events
function createIpcChannel(socket: IpcRenderer) {
    // `eventChannel` takes a subscriber function
    // the subscriber function takes an `emit` argument to put messages onto the channel
    return eventChannel(emit => {
        const lettersHandler = (_: any, payload: any) => {
            // puts event payload into the channel
            // this allows a Saga to take this payload from the returned channel
            emit(lettersReceived(payload));
        };

        const errorHandler = (errorEvent: any) => {
            // create an Error object and put it into the channel
            emit(new Error(errorEvent.reason));
        };
        // setup the subscription
        socket.on(LETTERS_RECEIVED, lettersHandler);

        socket.on('error', errorHandler);

        // the subscriber must return an unsubscribe function
        // this will be invoked when the saga calls `channel.close` method
        const unsubscribe = () => {
            socket.removeAllListeners(LETTERS_RECEIVED);
        };

        return unsubscribe;
    });
}

export default function* watchRequestedLetters() {
    const ipcChannel = yield call(createIpcChannel, ipcRenderer);

    yield call(() => ipcRenderer.send(LETTERS_REQUESTED));

    while (true) {
        try {
            const lettersReceived = yield take(ipcChannel);
            // An error from ipcChannel will cause the saga jump to the catch block
            yield put(lettersReceived);
        } catch (err) {
            // ipcChannel is still open in catch block
            // if we want end the ipcChannel, we need close it explicitly
            ipcChannel.close();
        }
    }
}
