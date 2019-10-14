import { applyMiddleware, createStore, Store, Middleware } from 'redux';
import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, RootState } from '../reducers';

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
    const sagaMiddleware = reduxSaga();
    const middlewares: Middleware[] = [sagaMiddleware];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').rootReducer)
    );
}

export default store;
