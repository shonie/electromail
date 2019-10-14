import { eventChannel } from 'redux-saga';
import { IpcRenderer } from 'electron';

// this function creates an event channel from a given socket
// Setup subscription to incoming `channelName` events
export default function createIpcChannel(socket: IpcRenderer, channelName: string) {
    // `eventChannel` takes a subscriber function
    // the subscriber function takes an `emit` argument to put messages onto the channel
    return eventChannel(emit => {
        const messageHandler = (_: any, payload: any) => {
            // puts event payload into the channel
            // this allows a Saga to take this payload from the returned channel
            emit(payload);
        };

        const errorHandler = (errorEvent: any) => {
            // create an Error object and put it into the channel
            emit(new Error(errorEvent.reason));
        };
        // setup the subscription
        socket.on(channelName, messageHandler);

        socket.on('error', errorHandler);

        // the subscriber must return an unsubscribe function
        // this will be invoked when the saga calls `channel.close` method
        const unsubscribe = () => {
            socket.removeAllListeners(channelName);
        };

        return unsubscribe;
    });
}
