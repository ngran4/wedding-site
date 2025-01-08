import React, { useState } from "react";
// import axios from 'axios';
import "./RSVP.css";

import EarlyRsvpForm from "./EarlyRsvp/EarlyRsvpForm";
import SearchGuest from "./SearchGuest/SearchGuest";
import Map from "../../components/Map/Map";

const RSVP = () => {
  const [groupData, setGroupData] = useState(null);
  return (
    <>
    <div className="RSVP__container">
      {groupData ? (
        <EarlyRsvpForm group={groupData} />
      ) : (
        <>
          <div className="name-date__container">
            <h1>Nicole & Ian</h1>
            <p>Sunday, Sep 7 | Lucca, Italy</p>
            <p>
              Please submit a preliminary RSVP to help us get an idea of numbers
            </p>
            <SearchGuest setGroupData={setGroupData} />
            {/* {groupData ? (
        <EarlyRsvpForm group={groupData} />
      ) : (
        <p>Search your name to start your RSVP.</p>
      )} */}
          </div>
          <div className="address__container">
            <h3 id="address-title">Time & Location</h3>
            <p id="-date-time">Sep 07, 2025, 4:00 PM</p>
            <p id="address">Via delle Ville, 2400, 55100 Lucca LU, Italy</p>
            {/* <div className="map__container">MAP</div> */}
            
            <div className="map__container">
            <Map />
            </div>
          </div>
        </>
      )}
    
    </div>
  </>
  );
};

export default RSVP;

