import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive"


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("toggle menu")
    setShowMenu(!showMenu);
  }

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  }

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
        N & I
        </NavLink>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
              HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/details" className="nav__link" onClick={closeMenuOnMobile}> 
              DETAILS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/weddingparty" className="nav__link" onClick={closeMenuOnMobile}>
              WEDDING PARTY
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/registry" className="nav__link" onClick={closeMenuOnMobile}>
              REGISTRY
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoCloseOutline />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenuOutline />
        </div>
      </nav>
    </header>
  )
}

export default Navbar