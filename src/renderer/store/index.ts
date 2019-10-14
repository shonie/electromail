import { applyMiddleware, createStore, Store, Middleware } from 'redux';
import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootState } from '../reducers';
import rootSaga from '../sagas';

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
    const sagaMiddleware = reduxSaga();
    const middlewares: Middleware[] = [sagaMiddleware];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};

const store = configureStore();

if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').rootReducer)
    );
}

export default store;
