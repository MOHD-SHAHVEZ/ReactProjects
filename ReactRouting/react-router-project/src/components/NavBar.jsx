import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
        <div id='nav-linkBar'>
        <ul>
            <li>
                <NavLink to='/home' className={({isActive}) => isActive ? "active-link" : "no-active-link"}>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => isActive ? "active-link" : "no-active-link"}>
                About
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link" : "no-active-link"}>
                Dashboard
                </NavLink>
            </li>
        </ul>
        </div>
        <div id="link-bar">
             <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default NavBar
