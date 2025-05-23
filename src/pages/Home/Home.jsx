import React from "react";
import "./Home.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { PiDotOutlineFill } from "react-icons/pi";
// import Hero from "./Hero/Hero";
// import DetailsBlock from "./DetailsBlock/DetailsBlock";
// import RsvpBlock from "./RsvpBlock/RsvpBlock";

const primaryOrange = getComputedStyle(
  document.documentElement
).getPropertyValue("--primary-orange");
const primaryRed = getComputedStyle(document.documentElement).getPropertyValue(
  "--primary-red"
);

const Home = () => {
  return (
    <>
      <div className="home__container">
        <div className="hero__container">
          <div className="hero-textbox">
            <p id="hero-intro">Ci Sposiamo!</p>
            <div id="hero-names">
              NICOLE <br />
              <div className="inline-container">
                <div className="ampersand">&</div>IAN
              </div>
            </div>
            <div className="date-container">
            <span className="lastName">Granville</span>
            <PiDotOutlineFill className="dot" />
            <div id="hero-date">
              <div
                style={{
                  verticalAlign: "sub",
                  display: "inline",
                  fontSize: "3.5rem",
                }}
              >
                9
              </div>
              <span style={{fontSize: "3.3rem"}}>.</span>
              <div style={{ display: "inline", verticalAlign: "middle", fontSize: "3.8rem" }}>7</div>
              <span style={{fontSize: "3.3rem"}}>.</span>
              <div
                style={{
                  verticalAlign: "sub",
                  display: "inline",
                  fontSize: "3.4rem",
                }}
              >
                25
              </div>
            </div>
            <PiDotOutlineFill className="dot" />
            <span className="lastName">Erickson</span>
            </div>

          </div>
        </div>

        <div className="DetailsBlock__container">
          <div className="DetailsBlock__title">
            <p style={{ fontSize: "1.3rem" }}>JOIN US</p>
            <div className="vl"></div>
            <div id="where-when">
              WHERE
              <br />
              <div className="ampersand">&</div>WHEN
            </div>
          </div>
          <div className="DetailsBlock__details">
            <div id="DetailsBlock__date">SUNDAY, 9.7.25</div>
            <div id="DetailsBlock__address">
              Via delle Ville, 2400, 55100 Lucca LU, Italy
            </div>

            <div className="DetailsBlock__events">
              <div>
                <div className="DetailsBlock__event-time">4</div>
                <span style={{ color: primaryRed, paddingRight: "8px" }}>
                  {" "}
                  pm
                </span>{" "}
                Ceremony
              </div>
              <div>
                <div className="DetailsBlock__event-time">5</div>
                <span style={{ color: primaryRed, paddingRight: "8px" }}>
                  {" "}
                  pm
                </span>{" "}
                Aperitivo
              </div>
              <div>
                <div className="DetailsBlock__event-time">6</div>
                <span style={{ color: primaryRed, paddingRight: "8px" }}>
                  {" "}
                  pm
                </span>{" "}
                Reception
              </div>
            </div>

            <div id="DetailsBlock__link">
              <a href="/details" style={{ fontSize: "1rem" }}>
                See Full Details{" "}
                <span id="details-arrow">
                  {" "}
                  <HiOutlineArrowLongRight />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="RsvpBlock__container">
          <div className="RsvpBlock__link">
            <p id="RsvpBlock__text">Please fill out a non-committal RSVP</p>
            <div id="rsvp-btn">
              <a href="/rsvp" className="btn" style={{ color: "white" }}>
                RSVP NOW
              </a>
            </div>
          </div>
          <div className="RsvpBlock__title">
            <p style={{ fontSize: "1.3rem" }}>READY TO COMMIT?</p>
            <div className="vl"></div>
            <div id="pls-rsvp">
              PLS
              <br />
              RSVP
            </div>
          </div>
        </div>

        <div className="about__container">
          {/* <div id="about__title">OUR <br /> STORY</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
