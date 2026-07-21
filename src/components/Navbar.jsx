import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <span id="home-link">
            <Link to={"/glob-blog/"}>
                GLOB.
            </Link>
        </span>
        <ul>    
            <li>Blog</li>
            <li id="contact">Contact glob</li>
        </ul>
    </nav>
  )
}

export default Navbar