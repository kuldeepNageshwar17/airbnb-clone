import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
function Header () {
  return (
    <div className='header'>

      <Link to="/dashboard">
      <img
        className='heador__icon'
        src='
            https://www.investmentclub360.com/wp-content/uploads/2019/04/1_BsKbDTA9ZUVroeJ7asId4Q-1170x0-c-center.png'
        alt=''
      />
      </Link>
 
      <div className='header__center'>
        <input />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <ExpandMoreIcon />
        <LanguageIcon /> 
        <Avatar />
      </div>
    </div>
  )
}

export default Header
