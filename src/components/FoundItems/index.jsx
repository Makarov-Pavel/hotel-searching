import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './FoundItems.css'
import {IoIosStar} from 'react-icons/io'
import {HiOutlineHeart} from 'react-icons/hi'
import {HiHeart} from 'react-icons/hi'
import { dateFormatChange } from '../../utils/dateFormatChange'
import { addToFavorites, removeFromFavorites } from '../../redux/actionCreators'

function FoundItems() {
    const items = useSelector(store => store.itemsReducer.items)
    const favorites = useSelector(store => store.favoritesReducer.favorites)
    const date = useSelector(store => store.queryParams.date)
    const days = useSelector(store => store.queryParams.days)
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
            dispatch(removeFromFavorites(item.hotelId))
        } else {
            dispatch(addToFavorites({item,days}))
        } 
    }

  return (
    <div className='found-items-container'>
        {items.map(el => 
            <div key={el.hotelId} className='found-item'>
                <img src='images/house.png' alt='house' ></img>
                <div className='found-item__info'>
                   <h4>{el.hotelName}</h4>
                   <div>
                    <span>{dateFormatChange(date)}</span> - <span>{days} {daysCounterWordHelper(days)}</span>
                   </div>
                   <div>
                    <IoIosStar className={`found-item__star ${el.stars > 0 ?'active' : ''}`} />
                    <IoIosStar className={`found-item__star ${el.stars > 1 ?'active' : ''}`} />
                    <IoIosStar className={`found-item__star ${el.stars > 2 ?'active' : ''}`} />
                    <IoIosStar className={`found-item__star ${el.stars > 3 ?'active' : ''}`} />
                    <IoIosStar className={`found-item__star ${el.stars > 4 ?'active' : ''}`} />
                   </div>
                </div>
                <div className='found-item__price'>
                    {inFavorites(el) ? <HiHeart className='found-item__Heart found-item__Heart_colored' onClick={()=>toggleFavoritesHandler(el)}/> : <HiOutlineHeart className='found-item__Heart found-item__Heart_outline' onClick={()=>toggleFavoritesHandler(el)}/>}
                    <span>{el.priceAvg} ₽</span>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default FoundItems