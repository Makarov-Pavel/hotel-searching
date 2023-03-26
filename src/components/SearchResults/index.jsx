import React from 'react'
import './SearchResults.css'
import { useSelector } from 'react-redux'
import FoundItems from '../FoundItems'
import {SlArrowRight} from 'react-icons/sl'
import { dateFormatChange } from '../../utils/dateFormatChange'
import SwiperComp from '../Swiper'

function SearchResults() {
  const location = useSelector(store => store.queryParams.location)
  const date = useSelector(store => store.queryParams.date)
  const favorites = useSelector(store => store.favoritesReducer.favorites)

  const hotelsCountWordHelper = (hotels) => {
    let str = String(hotels)
    if(str[str.length - 1] === '1'){
        return 'отель'
    } else if(Number(str[str.length - 1]) > 1 && Number(str[str.length - 1]) < 5){
        return 'отеля'
    } else {
        return 'отелей'
    }
}

  return (
    <div className='search-results-container'>
        <header className='search-results__header'>
          <div className='search-results__text'>
            Отели <SlArrowRight className='arrow-icon' /> {location}
          </div>
          <div className='search-results__date'>
            {dateFormatChange(date)}
          </div>
        </header>
        <SwiperComp />
        <p>Добавлено в Избранное: <span>{favorites.length}</span> {hotelsCountWordHelper(favorites.length)}</p>
        <FoundItems />
    </div>
  )
}

export default SearchResults