import React, { useRef, useState, useEffect } from 'react'
import './SearchPanel.css'
import today from '../../utils/calculateTodaysDate'
import defaultLastDay from '../../utils/calculateDefaultLastDay'
import { calculateLastDay } from '../../utils/calculateLastDay'
import { useDispatch, useSelector } from 'react-redux'
import { setDateAction, setDaysAction, setItems, setLocationAction } from '../../redux/actionCreators'

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
        fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${locationValue}&currency=rub&checkIn=${dateRef.current.value}&checkOut=${defaultLastDay}&limit=20`)
        .then(res => res.json())
        .then(arr => {
            dispatch(setItems(arr))
        })
    },[])

    

    const handelSearch = () => {
        const lastDay = calculateLastDay(dateRef.current.value, daysValue)
        
        fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${locationValue}&currency=rub&checkIn=${dateRef.current.value}&checkOut=${lastDay}&limit=20`)
        .then(res => res.json())
        .then(arr => {
            dispatch(setLocationAction(locationRef.current.value))
            dispatch(setDateAction(dateRef.current.value))
            dispatch(setDaysAction(daysRef.current.value))
            dispatch(setItems(arr))
        })
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
                <input ref={dateRef} type='date' defaultValue={today}></input>
            </div>
            <div className='search-panel__days'>
                <span>Количество дней</span>
                <input ref={daysRef} type='text' value={daysValue} onChange={(e)=>{setDaysValue(e.target.value)}}></input>
            </div>
        </div>
        
        <button className='search-panel__search-btn' onClick={()=>handelSearch()} >Найти</button>
    </div>
  )
}

export default SearchPanel