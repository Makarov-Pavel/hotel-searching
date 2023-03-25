import { combineReducers } from "redux";
import today from "../../utils/calculateTodaysDate";

export const defaultState = {
    location: 'Москва',
    date: today,
    days: '1',
    items: [],
    favorites: []
}

const test = (state = defaultState, action) =>{
    switch(action.type){
        case 'getLocation' :
            return state.location
        case 'setLocation' :
            return {...state,location:action.payload}
        case 'getDays' :
            return state.days
        case 'setDays' :
            return {...state,days:action.payload}
        case 'getDate' :
            return state.date
        case 'setDate' :
            return {...state,date:action.payload}
        case 'getItems' :
            return state.items
        case 'setItems' :
            return {...state,items:action.payload}
        case 'getFavorites' :
            return state.favorites
        case 'addToFavorites' :
            return {...state,favorites:[...state.favorites,{...action.payload.item, days: action.payload.days}]}
        case 'removeFromFavorites' :
            return {...state,favorites:state.favorites.filter(el => el.hotelId !== action.payload)}
        default:
            return state
    }
}


const reducer = combineReducers({
    test
})

export default reducer