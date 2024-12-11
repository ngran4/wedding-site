import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
        N & I
        </NavLink>

        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
              HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/details" className="nav__link"> 
              DETAILS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/weddingparty" className="nav__link">
              WEDDING PARTY
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/registry" className="nav__link">
              REGISTRY
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <IoCloseOutline />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <IoMenuOutline />
        </div>
      </nav>
    </header>
  )
}

export default Navbar