import { ADD_TO_FAVORITES, DEFAULT_FETCH_HOTELS, FETCH_HOTELS, REMOVE_FROM_FAVORITES, SET_DATE, SET_DAYS, SET_ITEMS, SET_LOCATION, SET_PRICE_HIGHT, SET_PRICE_LOW, SET_RATING_HIGHT, SET_RATING_LOW } from "./constants";

export const setLocationAction = (payload) => ({type:SET_LOCATION, payload})
export const setDaysAction = (payload) => ({type:SET_DAYS, payload})
export const setDateAction = (payload) => ({type:SET_DATE, payload})
export const addToFavorites = (payload) => ({type:ADD_TO_FAVORITES, payload})
export const removeFromFavorites = (payload) => ({type:REMOVE_FROM_FAVORITES, payload})
export const setRatingHight = (payload) => ({type:SET_RATING_HIGHT, payload})
export const setRatingLow = (payload) => ({type:SET_RATING_LOW, payload})
export const setPriceHight = (payload) => ({type:SET_PRICE_HIGHT, payload})
export const setPriceLow = (payload) => ({type:SET_PRICE_LOW, payload})
export const setItems = (payload) => ({type:SET_ITEMS, payload})
export const defaultFetchHotels = () => ({type:DEFAULT_FETCH_HOTELS})
export const fetchHotels = (payload) => ({type:FETCH_HOTELS,payload})