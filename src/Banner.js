import { Button } from '@material-ui/core'
import React ,{useState}from 'react'
import './Banner.css'
import Search from './Search'
function Banner () {
  const [showSearch, setshowSearch] = useState(false)
  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch &&<Search />}
        <Button variant='outlined' className='banner__searchButton' onClick={()=>{setshowSearch(!showSearch)}}>
          {showSearch?"Hide":"Search Date"}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan diffrent kind of getaway to uncover the hidden gems neat you{' '}
        </h5>
        <Button variant='outlined'>Explore NearBy</Button>
      </div>
    </div>
  )
}

export default Banner
