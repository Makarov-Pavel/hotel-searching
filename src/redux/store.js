import {createStore} from 'redux'
import { combineReducers } from "redux";
import { queryParams } from './reducers';
import { favoritesReducer } from './reducers/favoritesReducer';
import { itemsReducer } from './reducers/itemsReducer';

const reducer = combineReducers({
    queryParams,
    favoritesReducer,
    itemsReducer
})

const store =  createStore(reducer);

export default store