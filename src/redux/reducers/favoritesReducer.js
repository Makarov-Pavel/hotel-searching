import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_PRICE_HIGHT, SET_PRICE_LOW, SET_RATING_HIGHT, SET_RATING_LOW } from "../constants"

const defaultState = {
    favorites: [],
    status: 'ratingHight'
}

export const favoritesReducer = (state = defaultState, action) =>{
    switch(action.type){
        case ADD_TO_FAVORITES :
            return {...state,favorites:[...state.favorites,{...action.payload.item, days: action.payload.days}]}
        case REMOVE_FROM_FAVORITES :
            return {...state,favorites:state.favorites.filter(el => el.hotelId !== action.payload)}
        case SET_RATING_HIGHT :
            return ({...state,favorites:state.favorites.sort((a,b) => b.stars - a.stars),status:action.payload})
        case SET_RATING_LOW :
            return {...state,favorites:state.favorites.sort((a,b) => a.stars - b.stars),status:action.payload}
        case SET_PRICE_HIGHT :
            return {...state,favorites:state.favorites.sort((a,b) => b.priceAvg - a.priceAvg),status:action.payload}
        case SET_PRICE_LOW :
            return {...state,favorites:state.favorites.sort((a,b) => a.priceAvg - b.priceAvg),status:action.payload}
        default:
            return state
    }
}
