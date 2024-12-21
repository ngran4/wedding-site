import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
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
          <div id="where-when">WHERE&WHEN</div>
        </div>
        <div className="DetailsBlock__details">
          <div className="DetailsBlock__details--date">Sunday, 9.7.25</div>
          <div className="DetailsBlock__details--address">
            Via delle Ville, 2400, 55100 Lucca LU, Italy
          </div>
          <div className="DetailsBlock__details--time">5pm Ceremony</div>
          <div className="DetailsBlock__details--time">6pm Reception</div>
          <div className="DetailsBlock__details--link">
            <a href="/details">See Full Details</a>
          </div>
        </div>
      </div>

      <div className="RsvpBlock__container">
        <div className="RsvpBlock__title">PLS RSVP</div>
        <div className="RsvpBlock__link">
          <div className="RsvpBlock__text">Please confirm your attendance</div>
          <div className="RsvpBlock__link">
            <a href="/rsvp">RSVP</a>
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
