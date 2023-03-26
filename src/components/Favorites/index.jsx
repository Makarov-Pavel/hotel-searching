import React from 'react'
import './Favorites.css'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosStar} from 'react-icons/io'
import {HiOutlineHeart} from 'react-icons/hi'
import {HiHeart} from 'react-icons/hi'
import { dateFormatChange } from '../../utils/dateFormatChange'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdKeyboardArrowUp} from 'react-icons/md'
import {RxDividerHorizontal} from 'react-icons/rx'
import { addToFavorites, removeFromFavorites, setPriceHight, setPriceLow, setRatingHight, setRatingLow } from '../../redux/actionCreators'
import { numberFormatChange } from '../../utils/numberFormatChange'

function Favorite() {
    const favorites = useSelector(store => store.favoritesReducer.favorites)
    const status = useSelector(store => store.favoritesReducer.status)
    const date = useSelector(store => store.queryParams.date)
    const days = useSelector(store => store.queryParams.days)

    

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
            dispatch(removeFromFavorites(item.hotelId))
        } else {
            dispatch(addToFavorites({item,days}))
        } 
    }

    const toggleSortRatingHandler = () => {
        if(status !== 'ratingHight'){
            dispatch(setRatingHight('ratingHight'))
        } else {
            dispatch(setRatingLow('ratingLow'))
        }
    }
    const toggleSortPriceHandler = () => {
        if(status !== 'priceHight'){
            dispatch(setPriceHight('priceHight'))
        } else {
            dispatch(setPriceLow('priceLow'))
        }
    }

    const sortRatingActiveClass = () => {
        return status === 'ratingHight' || status === 'ratingLow' ? 'active-sort' : ''
    }
    const sortPriceActiveClass = () => {
        return status === 'priceHight' || status === 'priceLow' ? 'active-sort' : ''
    }



  return (
    <div className='favorite-container'>
        <h3>Избранное</h3>
        <div className='favorite__sorts'>
            <div className={`rating-sort ${sortRatingActiveClass()}`} onClick={()=>toggleSortRatingHandler()}>
                <h5>Рейтинг <MdKeyboardArrowUp className={`up-icon ${status === 'ratingHight' ? 'active-icon' : ''}`}/><MdKeyboardArrowDown className={`down-icon ${status === 'ratingLow' ? 'active-icon' : ''}`}/></h5>
            </div>
            <div className={`price-sort ${sortPriceActiveClass()}`} onClick={()=>toggleSortPriceHandler()}>
                <h5>Цена <MdKeyboardArrowUp className={`up-icon ${status === 'priceHight' ? 'active-icon' : ''}`}/><MdKeyboardArrowDown className={`down-icon ${status === 'priceLow' ? 'active-icon' : ''}`}/></h5>
            </div>
        </div>
        <div className='favorite-items'>
            {favorites.length !== 0 ? favorites.map(el =>
            <div key={el.hotelId} className='favorite-item'>
                <div className='favorite-item__header-line'>
                    <h4>{el.hotelName}</h4>
                    {inFavorites(el) ? <HiHeart className='favorite-item__Heart favorite-item__Heart_colored' onClick={()=>toggleFavoritesHandler(el)}/> : <HiOutlineHeart className='favorite-item__Heart favorite-item__Heart_outline' onClick={()=>toggleFavoritesHandler(el)}/>}
                </div>
                   
                <div className='favorite-item__middle-line'>
                <span>{dateFormatChange(date)}</span> <RxDividerHorizontal/> <span>{el.days} {daysWordHelper(el.days)}</span>
                </div>
                   
                <div className='favorite-item__footer-line'>
                    <div>
                        <IoIosStar className={`favorite-item__star ${el.stars > 0 ?'active' : ''}`} />
                        <IoIosStar className={`favorite-item__star ${el.stars > 1 ?'active' : ''}`} />
                        <IoIosStar className={`favorite-item__star ${el.stars > 2 ?'active' : ''}`} />
                        <IoIosStar className={`favorite-item__star ${el.stars > 3 ?'active' : ''}`} />
                        <IoIosStar className={`favorite-item__star ${el.stars > 4 ?'active' : ''}`} />
                    </div>
                    <div className='favorite-item__price'>
                        <span className='price__text'>Price:</span><span className='price__number'>{numberFormatChange(el.priceAvg)} ₽</span>
                    </div>
                </div>
                   
            </div>
            ) : 
            <div className='favorites-items__empty'>
                <span >Пусто</span>
            </div>}
        </div>
    </div>
  )
}

export default Favorite