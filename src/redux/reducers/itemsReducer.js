import { SET_ITEMS } from "../constants"

const defaultState = {
    items: []
}

export const itemsReducer = (state = defaultState, action) =>{
    switch(action.type){
        case SET_ITEMS :
            return {...state,items:action.payload}
        default:
            return state
    }
}