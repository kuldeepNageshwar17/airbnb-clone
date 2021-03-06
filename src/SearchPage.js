import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
function SearchPage () {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
          <p>62 stays . 26 august to 30 august . 2 august</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and Beds</Button>
          <Button variant="outlined">More Filters</Button>
      </div>
    </div>
  )
}

export default SearchPage
