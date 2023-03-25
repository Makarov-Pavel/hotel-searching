import React from 'react'
import Favorite from '../../components/Favorites'
import Header from '../../components/Header'
import SearchResults from '../../components/SearchResults'
import SearchPanel from '../../components/SearchPanel'
import './HotelsPage.css'

function Hotels() {
  return (
    <div className='hotels-page-container'>
      <Header />
      <main className='hotels-page-main'>
        <aside>
          <SearchPanel />
          <Favorite />
        </aside>
        <SearchResults />
      </main>
    </div>
  )
}

export default Hotels