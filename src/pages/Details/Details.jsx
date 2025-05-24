import React from "react";
import "./Details.css";
import { PiDotOutlineFill } from "react-icons/pi";

const primaryRed = getComputedStyle(document.documentElement).getPropertyValue('--primary-green');

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
            The transfer service for guests outside the venue will pickup and drop-off at Porta Santa Maria, you can save <a href="https://maps.app.goo.gl/ovijc6UMF3u16e7k6?g_st=iw" target="_blank">this google maps link</a> for reference
          </p>
        </div>
        <div className="accomodation-block">
          <h2>ACCOMODATIONS</h2>
          <div className="vl"></div>
          <p>
            There are many hotels in the area. Please return at a later date for
            a more detailed list.
          </p>
        </div>
        <div className="attire-block">
          <h2>ATTIRE</h2>
          <div className="vl"></div>
          <p>
            Formal or cocktail attire is requested. Further details will be
            provided after invitations are sent.
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
            <span style={{ color: primaryRed,  paddingRight: '7px' }}> pm</span>{" "}
            Ceremony
            <p>The ceremony will be located on the Duna</p>
          </div>
          <PiDotOutlineFill className="dot" />
          <div className="event">
            <div
              className="event-time"
            >
              5
            </div>
            <span style={{ color: primaryRed,  paddingRight: '8px' }}> pm</span>{" "}
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
            <span style={{ color: primaryRed, paddingRight: '8px' }}> pm</span>{" "}
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
