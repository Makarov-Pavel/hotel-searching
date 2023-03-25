import React, { useState } from 'react'
import './Favorites.css'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosStar} from 'react-icons/io'
import {HiOutlineHeart} from 'react-icons/hi'
import {HiHeart} from 'react-icons/hi'
import { dateFormatChange } from '../../utils/dateFormatChange'

function Favorite() {
    const favorites = (useSelector(store => store.test.favorites)).sort((a,b) => a.priceAvg - b.priceAvg)
    const date = useSelector(store => store.test.date)
    const days = useSelector(store => store.test.days)

    const [priceRating, setPriceRating] = useState('')
    const [sortRating, setSortRating] = useState('')

    const dispatch = useDispatch()


    const daysWordHelper = (days) => {
        let str = String(days)
        if(str[str.length - 1] === '1'){
            return 'день'
        } else if(Number(str[str.length - 1]) > 1 && Number(str[str.length - 1]) < 5){
            return 'дня'
        } else {
            return 'дней'
        }
    }

    const inFavorites = (item) => {
        if(favorites.length !== 0){
            return favorites.find(el => el.hotelId === item.hotelId) 
        }
        return false
    }
    const toggleFavoritesHandler = (item) => {
        if(inFavorites(item)){
            dispatch({type:'removeFromFavorites', payload: item.hotelId})
        } else {
            dispatch({type:'addToFavorites', payload: {item,days}})
        } 
    }

    const togglePriceRatingHandler = () => {
        priceRating === 'low' ?setPriceRating('hight') :setPriceRating('low')
    }
    const toggleSortRatingHandler = () => {
        sortRating === 'low' ?setSortRating('hight') :setSortRating('low')
    }



  return (
    <div className='favorite-container'>
        <h3>Избранное</h3>
        <div className='favorite__filters'>
            <div className='rating-filter'>
                <h5>Рейтинг <img className='up-icon' src='images/up.svg'></img><img className='down-icon' src='images/down.svg'></img></h5>
            </div>
            <div className='price-filter' onClick={()=>toggleSortRatingHandler()}>
                <h5>Цена <img className='up-icon' src='images/up.svg'></img><img className='down-icon' src='images/down.svg'></img></h5>
            </div>
        </div>
        <div className='favorite__items'>
            {favorites.length !== 0 ? favorites.map(el =>
            <div key={el.hotelId} className='favorite__item'>
                <div>
                   <h4>{el.hotelName}</h4>
                   <div>
                    <span>{dateFormatChange(date)}</span> - <span>{el.days} {daysWordHelper(el.days)}</span>
                   </div>
                   <div>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                   </div>
                </div>
                <div>
                    {inFavorites(el) ? <HiHeart onClick={()=>toggleFavoritesHandler(el)}/> : <HiOutlineHeart onClick={()=>toggleFavoritesHandler(el)}/>}
                    <span>{el.priceAvg} ₽</span>
                </div>
            </div>
            ) : <span>Пусто :(</span>}
        </div>
    </div>
  )
}

export default Favorite