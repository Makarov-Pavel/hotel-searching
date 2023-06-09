import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './FoundItems.css'
import {IoIosStar} from 'react-icons/io'
import {HiOutlineHeart} from 'react-icons/hi'
import {HiHeart} from 'react-icons/hi'
import { dateFormatChange } from '../../utils/dateFormatChange'
import { addToFavorites, removeFromFavorites } from '../../redux/actionCreators'
import { numberFormatChange } from '../../utils/numberFormatChange'
import { RxDividerHorizontal } from 'react-icons/rx'

function FoundItems() {
    const items = useSelector(store => store.itemsReducer.items)
    const favorites = useSelector(store => store.favoritesReducer.favorites)
    const date = useSelector(store => store.queryParams.date)
    const days = useSelector(store => store.queryParams.days)
    const dispatch = useDispatch()

    const daysCounterWordHelper = (days) => {
        if (days > 10 && [11, 12, 13, 14].includes(days%100)) return 'дней';
        let lastNum = days%10;
        if (lastNum == 1) return 'день';
        if ([2,3,4].includes(lastNum)) return 'дня';
        if ([5,6,7,8,9,0].includes(lastNum)) return 'дней';
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
        {items[0] !== undefined ? items.map(el => 
            <div key={el.hotelId} className='found-item'>
                <img src='images/house.png' alt='house' ></img>
                <div className='found-item__info'>
                    <div className='found-item__header-line'>
                      <h4>{el.hotelName}</h4>
                      {inFavorites(el) ? <HiHeart className='found-item__Heart found-item__Heart_colored' onClick={()=>toggleFavoritesHandler(el)}/> : <HiOutlineHeart className='found-item__Heart found-item__Heart_outline' onClick={()=>toggleFavoritesHandler(el)}/>}
                    </div>
                   
                   <div className='found-item__middle-line'>
                        <span>{dateFormatChange(date)}</span> <RxDividerHorizontal/> <span>{days} {daysCounterWordHelper(days)}</span>
                   </div>

                   <div className='found-item__footer-line'>
                        <div>
                            <IoIosStar className={`found-item__star ${el.stars > 0 ?'active' : ''}`} />
                            <IoIosStar className={`found-item__star ${el.stars > 1 ?'active' : ''}`} />
                            <IoIosStar className={`found-item__star ${el.stars > 2 ?'active' : ''}`} />
                            <IoIosStar className={`found-item__star ${el.stars > 3 ?'active' : ''}`} />
                            <IoIosStar className={`found-item__star ${el.stars > 4 ?'active' : ''}`} />
                        </div> 
                        <div className='found-item__price'>
                            <span className='price__text'>Price:</span><span className='price__number'>{numberFormatChange(el.priceAvg)} ₽</span>
                        </div>
                   </div>
                </div>
            </div>
            )
        :<span className='check-text'>Проверьте введенные данные</span>}
    </div>
  )
}

export default FoundItems