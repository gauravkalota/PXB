import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(saga);
