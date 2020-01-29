import React from 'react';
import Menu from './Menu'
import logo from '../../assets/logo.png'

import './style.css'

function Nav () {
    return (
      <nav className='navbar'>
        <img
          src={logo}
          alt='Logotipo do Rocketchat'
          className='navbar-logo'
        />
        <Menu />
      </nav>
    )
  }

export default Nav