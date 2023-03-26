import {put, takeEvery,call} from 'redux-saga/effects'
import defaultLastDay from '../../utils/calculateDefaultLastDay'
import today from '../../utils/calculateTodaysDate'
import { setItems } from '../actionCreators'
import { DEFAULT_FETCH_HOTELS } from '../constants'

const location = 'Москва'
const defaultFetch = () => fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${today}&checkOut=${defaultLastDay}&limit=30`)

function* defaultFetchWorker () {
    const data = yield call(defaultFetch)
    const arr = yield call(()=>new Promise(res => res(data.json())))
    yield put(setItems(arr))
}

export function* defaultFetchWatcher(){
    yield takeEvery(DEFAULT_FETCH_HOTELS,defaultFetchWorker)
}