import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './FoundItems.css'
import {IoIosStar} from 'react-icons/io'
import {HiOutlineHeart} from 'react-icons/hi'
import {HiHeart} from 'react-icons/hi'
import { dateFormatChange } from '../../utils/dateFormatChange'

function FoundItems() {
    const items = useSelector(store => store.test.items)
    const favorites = useSelector(store => store.test.favorites)
    const date = useSelector(store => store.test.date)
    const days = useSelector(store => store.test.days)
    const dispatch = useDispatch()

    const daysCounterWordHelper = (days) => {
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

  return (
    <div className='found-items-container'>
        {items.map(el => 
            <div key={el.hotelId} className='found-item'>
                <img src='images/house.png' alt='house'></img>
                <div className='found-item__info'>
                   <h4>{el.hotelName}</h4>
                   <div>
                    <span>{dateFormatChange(date)}</span> - <span>{days} {daysCounterWordHelper(days)}</span>
                   </div>
                   <div>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                   </div>
                </div>
                <div className='found-item__price'>
                    {inFavorites(el) ? <HiHeart onClick={()=>toggleFavoritesHandler(el)}/> : <HiOutlineHeart onClick={()=>toggleFavoritesHandler(el)}/>}
                    <span>{el.priceAvg} ₽</span>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default FoundItems