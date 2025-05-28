import React from "react";
import "./Details.css";
import { PiDotOutlineFill } from "react-icons/pi";
import LuccaInfoSheet from "../../assets/LuccaInfoSheet.pdf"

const primaryGreen = getComputedStyle(document.documentElement).getPropertyValue('--primary-green')
const secondaryGreen = getComputedStyle(document.documentElement).getPropertyValue('--secondary-green');
const primaryCream = getComputedStyle(document.documentElement).getPropertyValue('--primary-cream');

const Details = () => {
  return (
    <>
      <div className="details__container">
        <div className="details__hero">
          <div className="vl"></div>
          <h1 id="hero-title">INFO</h1>
          <h3 id="hero-subtext">
            Our wedding will begin at 4pm on September 7th at Arancera di Villa
            Grabau. Here's everything else you need to know.{" "}
          </h3>
        </div>
        <div className="TAA__container">
                  <div className="transportation-block">
          <h2>TRANSPORTATION</h2>
          <div className="vl"></div>
          <p>
            The transfer service for guests outside the venue will pickup and drop-off at Porta Santa Maria, you can save <a href="https://maps.app.goo.gl/ovijc6UMF3u16e7k6?g_st=iw" target="_blank" rel="noopener noreferrer" style={{ color:primaryCream, fontWeight: 500, textDecoration: "underline"}}>this map link</a> for reference
          </p>
        </div>
        <div className="accomodation-block">
          <h2>ACCOMMODATIONS</h2>
          <div className="vl"></div>
          <p>
            Check out our <a href={LuccaInfoSheet} target="_blank" rel="noopener noreferrer" style={{ color: secondaryGreen, fontWeight: 500, textDecoration: "underline"}}>guide</a> for travel tips, places to stay, and things to do in the area. You can also save this <a href="https://www.google.com/maps/d/u/0/viewer?mid=1EDjldnUgkW85bOORx4NddD6F9zxDN0jJ&g_ep=CAISEjI1LjIwLjAuNzU3ODEwNjA5MBgAIN1iKmIsOTQyNjczMjM5NDI3NTMwNCw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw5NDIzMTE4OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNEICVVM%3D&skid=6f0ba72d-e6c7-4f7e-9773-19d32ef7e1b1&g_st=ia&ll=43.86076042925501%2C10.435577750000018&z=11" target="_blank" rel="noopener noreferrer" style={{ color: secondaryGreen, fontWeight: 500, textDecoration: "underline"}}>google map</a> for local eats, drinks, and shopping.
          </p>
        </div>
        <div className="attire-block">
          <h2>ATTIRE</h2>
          <div className="vl"></div>
          <p>
            Formal attire requested (longer cocktail dresses are fine—just no minis, please!). 
          </p>
        </div>
        </div>

        <div className="photo-block"></div>
        <div className="schedule-block">
          <h2>SCHEDULE</h2>
          <div className="vl"></div>
          <p>All three events will take place at the</p>
          <h1>Arancera House</h1>
          <p>Via delle Ville, 2400, 55100 Lucca LU</p>

        </div>
        <div className="events-block">
          <div className="event">
            <div 
              className="event-time"
            >
              4
            </div>
            <span style={{ color: primaryGreen,  paddingRight: '7px' }}> pm</span>{" "}
            Ceremony
            <p>The ceremony will be located on the Duna</p>
          </div>
          <PiDotOutlineFill className="dot" />
          <div className="event">
            <div
              className="event-time details-aperitivo"
            >
              4<span id="details-aperitivo-time">30</span></div>
                <span id="details-aperitivo-pm">
                  {" "}
                  pm
                </span>{" "}
            Aperitivo
            <p>Join us for a cocktail hour in the garden</p>
          </div>
          <PiDotOutlineFill className="dot" />
          <div className="event">
            <div
            className="event-time"
            >
              6
            </div>
            <span style={{ color: primaryGreen, paddingRight: '8px' }}> pm</span>{" "}
            Reception
            <p>Dinner, daincing and speeches</p>
          </div>
        </div>
        <div className="bottom-block">
        If you'd like to help us toast to our next chapter, we've set up a <a href="https://registry.theknot.com/--september-2025-wa/68898013" id="honeyfund">HONEYMOON FUND</a> for our postnuptial adventure. 
            Any gift means so much and will help us make memories to last a lifetime :)
          
        </div>
      </div>
    </>
  );
};

export default Details;
