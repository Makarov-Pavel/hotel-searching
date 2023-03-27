import today from "../../utils/calculateTodaysDate";
import { SET_DATE, SET_DAYS, SET_LOCATION } from "../constants";

const defaultState = {
    location: 'Москва',
    date: today,
    days: '1'
}

export const queryParams = (state = defaultState, action) =>{
    switch(action.type){
        case SET_LOCATION :
            return {...state,location:action.payload}
        case SET_DAYS :
            return {...state,days:action.payload}
        case SET_DATE :
            return {...state,date:action.payload}
        default:
            return state
    }
}