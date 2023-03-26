import {put, takeEvery,call} from 'redux-saga/effects'
import { setDateAction, setDaysAction, setItems, setLocationAction } from '../actionCreators'
import { FETCH_HOTELS } from '../constants'



function* fetchWorker (action) {
    const fetchApi = () => fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${action.payload.locationValue}&currency=rub&checkIn=${action.payload.currentDateValue}&checkOut=${action.payload.lastDay}&limit=30`)
    const data = yield call(fetchApi)
    const arr = yield call(()=>new Promise(res => res(data.json())))
    yield put(setLocationAction(action.payload.currentLocationValue))
    yield put(setDateAction(action.payload.currentDateValue))
    yield put(setDaysAction(action.payload.currentDaysValue))
    yield put(setItems(arr))
}

export function* fetchWatcher(){
    yield takeEvery(FETCH_HOTELS,fetchWorker)
}