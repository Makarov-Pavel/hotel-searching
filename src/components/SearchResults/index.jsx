import React from 'react'
import './SearchResults.css'
import { useSelector } from 'react-redux'
import FoundItems from '../FoundItems'
import {SlArrowRight} from 'react-icons/sl'
import { dateFormatChange } from '../../utils/dateFormatChange'

function SearchResults() {
  const locationName = useSelector(store => store.test.location)
  const date = useSelector(store => store.test.date)
  const favorites = useSelector(store => store.test.favorites)

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
          <div>
            Отели <SlArrowRight /> {locationName}
          </div>
          <div>
            {dateFormatChange(date)}
          </div>
        </header>
        <div className='search-slider'>slider</div>
        <p>Добавлено в Избранное: {favorites.length} {hotelsCountWordHelper(favorites.length)}</p>
        <FoundItems />
    </div>
  )
}

export default SearchResults