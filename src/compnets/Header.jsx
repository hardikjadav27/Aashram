import React from 'react'
import '../Style/header.css';
import Logo from '../Photos/logo.png'
const Header = () => {
  return (
    <>
    <nav className='navbar'> 
      <ul className='nav-list'>
        <div className='logo'> <img src={Logo} alt="logo" /></div>
        <li>  Home  </li>
        <li>  About  </li>
        <li>  Service  </li>
        <li>  Contact Us  </li>                                               
      </ul>
      </nav>
      

      {/* <div class="rightNav">
          <input type="text" name="search" id="search"/>
          <button class="btn btn-sm">Search </button>
        </div> */}



    </>
  )
} 

export default Header
