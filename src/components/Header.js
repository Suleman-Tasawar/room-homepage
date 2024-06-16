import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>room</h3>
        </div>
        <nav className='nav__links'>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>shop</a></li>
                <li><a href='#'>about</a></li>
                <li><a href='#'>contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
