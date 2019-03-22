import {createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga'

const configureStore = (reducers, saga) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(saga);
    return store;
};

export default configureStore;