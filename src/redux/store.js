import {applyMiddleware, createStore} from 'redux'
import { combineReducers } from "redux";
import { queryParams } from './reducers';
import { favoritesReducer } from './reducers/favoritesReducer';
import { itemsReducer } from './reducers/itemsReducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    queryParams,
    favoritesReducer,
    itemsReducer
})

const store =  createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)

export default store