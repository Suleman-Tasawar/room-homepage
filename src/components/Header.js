import React, { useState } from 'react'
import "./Header.css";
const Header = () => {
  const [active,setActive] = useState(false)
  return (
    <header>
        <div className='logo'>
            <h3>room</h3>
        </div>
        <div className='hamburger' onClick={()=>setActive(!active)}>
          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fillRule="evenodd"/></svg>
        </div>
        <nav className={`nav__links ${active ? 'active' : ''}`}>
            <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
          <div className='close__icon'  onClick={()=>setActive(false)}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fillRule="evenodd" opacity=".201"/></svg>
          </div>

        </nav>
    </header>
  )
}

export default Header
