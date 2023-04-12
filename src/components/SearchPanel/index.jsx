import React, { useRef, useState, useEffect } from 'react'
import './SearchPanel.css'
import today from '../../utils/calculateTodaysDate'
import { calculateLastDay } from '../../utils/calculateLastDay'
import { useDispatch, useSelector } from 'react-redux'
import { defaultFetchHotels, fetchHotels} from '../../redux/actionCreators'

function SearchPanel() {
    const location = useSelector(store => store.queryParams.location)
    const days = useSelector(store => store.queryParams.days)

    const [locationValue, setLocationValue] = useState(location)
    const [daysValue, setDaysValue] = useState(days)
    const dateRef = useRef()
    const daysRef = useRef()
    const locationRef = useRef()
    
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(defaultFetchHotels())
    },[])


    const handelSearch = () => {
        if(+daysRef.current.value === 0){setDaysValue(1)}
        const currentDateValue = dateRef.current.value
        const currentLocationValue = locationRef.current.value
        const currentDaysValue =  +daysRef.current.value > 0 ? daysRef.current.value : 1

        const lastDay = calculateLastDay(currentDateValue, daysValue)
        dispatch(fetchHotels({locationValue,currentDateValue,lastDay,currentLocationValue,currentDaysValue}))
    }



  return (
    <div className='search-panel-container'>
        <div className='inputs-wrapper'>
            <div className='search-panel__location'>
                <span>Локация</span>
                <input ref={locationRef} type='text' value={locationValue} onChange={(e)=>setLocationValue(e.target.value)} ></input>
            </div>
            <div className='search-panel__date'>
                <span>Дата заселения</span>
                <input ref={dateRef} type='date' defaultValue={today} min={today}></input>
            </div>
            <div className='search-panel__days'>
                <span>Количество дней</span>
                <input ref={daysRef} type='text' value={daysValue} onChange={(e)=>{setDaysValue(e.target.value)}}></input>
            </div>
        </div>
        
        <button disabled={locationValue === '' || daysValue * 1 !== +daysValue} className='search-panel__search-btn' onClick={()=>handelSearch()} >Найти</button>
    </div>
  )
}

export default SearchPanel