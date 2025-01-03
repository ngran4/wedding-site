import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
// import Hero from "./Hero/Hero";
// import DetailsBlock from "./DetailsBlock/DetailsBlock";
// import RsvpBlock from "./RsvpBlock/RsvpBlock";

const Home = () => {
  return (
    <>
      <div className="hero__container">
        <div className="hero__textbox">
          <p id="hero-intro">Join Us For The Upcoming Wedding Of</p>
          <div id="hero-names">
            NICOLE <br />
            <div className="inline-container">
              <div id="ampersand">& </div>IAN
            </div>
          </div>
          <div className="hero-date">9.7.25</div>
        </div>
      </div>

      <div className="DetailsBlock__container">
        <div className="DetailsBlock__title">
          <p id="join-us">JOIN US</p>
          <div className="vl"></div>
          <div id="where-when">
            WHERE <br /> & WHEN
          </div>
        </div>
        <div className="DetailsBlock__details">
          <div id="DetailsBlock--date">SUNDAY, 9.7.25</div>
          <div id="DetailsBlock__address">
            Via delle Ville, 2400, 55100 Lucca LU, Italy
          </div>

          <div className="DetailsBlock__events">
          <div id="DetailsBlock__event-time">
            <div
              style={{ color: "orange", fontSize: "2rem", display: "inline" }}
            >
              4
            </div>
            <span style={{ color: "orange", fontSize: "1rem" }}> pm</span>{" "}
            Ceremony
          </div>
          <div id="DetailsBlock__event-time">
            <div
              style={{ color: "orange", fontSize: "2rem", display: "inline" }}
            >
              5
            </div>
            <span style={{ color: "orange", fontSize: "1rem" }}> pm</span>{" "}
            Aperitivo
          </div>
          <div id="DetailsBlock__event-time">
            <div
              style={{ color: "orange", fontSize: "2rem", display: "inline" }}
            >
              6
            </div>
            <span style={{ color: "orange", fontSize: "1rem," }}> pm</span>{" "}
            Reception
          </div>
          </div>

          <div id="DetailsBlock__link">
            <a href="/details" id="details-link">See Full Details <span id="details-arrow"> <HiOutlineArrowLongRight /></span></a>
          </div>
        </div>
      </div>

      <div className="RsvpBlock__container">
        <div className="RsvpBlock__link">
          <div className="RsvpBlock__text">Please confirm your attendance</div>
          <div className="RsvpBlock__link">
            <a href="/rsvp">RSVP</a>
          </div>
        </div>
        <div className="RsvpBlock__title">
          <p id="commit">READY TO COMMIT?</p>
          <div className="vl"></div>
          <div id="pls-rsvp">
            PLS
            <br />
            RSVP
          </div>
        </div>
      </div>

      <div className="about__container">our story</div>
      <div className="footer__container">
        <Footer />
      </div>
    </>
  );
};

export default Home;
