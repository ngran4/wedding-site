import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <>
    <div className="details__container">
      <div className="details__hero">
        <h1 id="hero-title">INFO</h1>
        <h3 id="hero-subtext">Our wedding will begin at 4pm on September 7th at Arancera di Villa Grabau. Here's everything else you need to know. </h3>
      </div>
      <div className="transportation-block">
        <h2>Transportation</h2>
        <p>Parking is limited at the venue, so we will be providing a bus to pick guests up in Lucca city center 
          and a shuttle to return guests will be running from 10pm-12pm</p>
      </div>
      <div className="accomodation-block">
        <h2>Accommodations</h2>
        <p>There are many hotels in the area. Please return at a later date for a more detailed list.</p>
      </div>
      <div className="attire-block">
        <h2>Attire</h2>
        <p>Formal or cocktail attire is requested. Further details will be provided after invitations are sent.</p>
      </div>
      <div className="photo-block">
        photo here
      </div>
      <div className="address-block">
        address
      </div>
      <div className="schedule-block">
        schedule
      </div>
      <div className="bottom-block">
        registry? 
      </div>
    </div>
    </>
  )
}

export default Details