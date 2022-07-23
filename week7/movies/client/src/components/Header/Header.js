import React from 'react';
import '../Header/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Movies App</h1>
        <NavLink to="/" className='nav-link'>
            Home
        </NavLink>
        <NavLink to="/new" className='nav-link'>
            Add new movie 
        </NavLink>
    </header>
  )
}

export default Header