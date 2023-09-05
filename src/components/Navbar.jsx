import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        {/* Navbar */}
      <nav className='container'>
          {/*Logo */}
         <div className="logo">
          <img src="/images/brand_logo.png" alt="Nike Logo`" />
         </div>

          {/* Menu Location About COntact */}
         <ul className='nav-links'>
          <li href='#'><Link to={'/'}>HOME</Link></li>
          <li href='#'><Link to={'/explore'}>EXPLORE</Link></li>
          <li href='#'><Link to={'/about'}>ABOUT</Link></li>
          <li href='#'><Link to={'/contact'}>CONTACT</Link></li>
         </ul>

          {/*Button */}
         <button>
         <Link to={'/login'}>
          Login
          </Link>
          </button>

      </nav>
      {/* Navbar Ends */}
    </div>
  )
}

export default Navbar