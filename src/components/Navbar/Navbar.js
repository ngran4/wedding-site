import React, { useState } from 'react'
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
              
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar