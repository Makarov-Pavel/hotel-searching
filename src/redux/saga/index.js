import { all } from "redux-saga/effects"
import { defaultFetchWatcher } from "./fetchDefaultHotels"
import { fetchWatcher } from "./fetchHotels"

export function* rootWatcher(){
    yield all([defaultFetchWatcher(),fetchWatcher()])
}