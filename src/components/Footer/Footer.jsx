import React from 'react'
import './Footer.css'
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div id="footer-text">QUESTIONS? TEXT US!</div>
      </div>
      <div className="lower-footer">
        <PiCopyrightLight style={{ marginRight: "5px" }}/> 2030 by Nicole Granille
      </div>
      </div>
  )
}

export default Footer