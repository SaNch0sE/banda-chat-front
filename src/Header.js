import React from 'react';
import IncLogo from './Logo';
import Blogo from '../public/backLogo.png'
import './index.css'

function Header () {
  return (
    <div className = "Hlogo">
      <IncLogo />
      <img src = {"Blogo"}></img>
      <input className = "ILogin" placeholder = "Login"></input>
    </div>
  )
}

export default Header;