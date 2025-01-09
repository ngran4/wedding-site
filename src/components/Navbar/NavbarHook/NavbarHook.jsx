import React, { useState } from "react";
import "./NavbarHook.css";
import { NavLink } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

const NavbarHook = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // console.log('toggle menu')
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
      // console.log('close mobile menu, is mobile')
    } 
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";

    // console.log(listClassName, 'listClassName') // recognizes when web vs mobile

    // console.log('render nav links') // is called upon page load

    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/details"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            DETAILS
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/RSVP"
          className={linkClassName}
          onClick={closeMobileMenu}
          >
            RSVP
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/wedding-party"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            WEDDING PARTY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/registry"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            REGISTRY
          </NavLink>
        </li> */}
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          N & I
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenuOutline />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu ${mobileMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoCloseOutline />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;