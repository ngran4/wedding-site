import React, { useState } from "react";
// import axios from 'axios';
import "./RSVP.css";

import EarlyRsvpForm from "./EarlyRsvp/EarlyRsvpForm";
import SearchGuest from "./SearchGuest/SearchGuest";

const RSVP = () => {
  const [groupData, setGroupData] = useState(null);
  return (
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
            <div className="map__container">MAP</div>
          </div>
        </>
      )}
    </div>
  );
};

export default RSVP;

// const RSVP = () => {
//   const [guestName, setGuestName] = useState(''); // single state for full name entry
//   const [group, setGroup] = useState(null);

//   // handle input changes and update form state
//   const handleChange = (e) => {
//     setGuestName({ ...guestName, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const [firstName, lastName] = guestName.split(' ');

//     try {
//       const res = await axios.get(`/api/guests/group?firstName=${guestName.firstName}&lastName=${guestName.lastName}`); //***group id instead of first and last name */
//       setGroup(res.data); // update group state with fetched data
//     } catch (error) {
//       alert('error fetching group details');
//     }
//   }

//   return (
//     <div>
//       <h1>RSVP Here</h1>
//       {!group ? (
//         // if group data not available, show initial form, otherwise show group RSVP form
//       <form onSubmit={handleSubmit}>
//         {/* input for putting first and last name same input box? */}
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//         <button type='submit'>Find RSVP</button>
//       </form>

//       ) : (
//         <GroupRSVPForm group={group} />
//       )}

//     </div>
//   )
// }

// const GroupRSVPForm = ({ group }) => {
//   const [rsvpData, setRsvpData] = useState(group.members.map(member => ({
//     ...member,
//     attending: null,
//     mealChoice: '',
//     specialRequests: ''
//   })));

//   const handleChange = (index, e) => {
//     const newRsvpData = [...rsvpData]; // create copy of rsvp data state
//     newRsvpData[index][e.target.name] = e.target.value; // update specific field for member
//     setRsvpData(newRsvpData);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('/api/guests/rsvp', rsvpData);
//       alert('RSVP submitted successfully');
//     } catch (error) {
//       alert('error submitting RSVP');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {rsvpData.map((member, idx) => (
//         <div key={member.id}>
//           <h2>{member.name}</h2>
//           <label>
//             Attending:
//             <div>
//               <label>
//                 <input type="radio" name="attending" value={true} onChange={(e) => handleChange(idx, e)} required />
//                 Yes
//               </label>
//               <label>
//                 <input type="radio" name="attending" value={false} onChange={(e) => handleChange(idx, e)} required />
//                 No
//               </label>
//             </div>
//           </label>
//           <label>
//             Meal Choice:
//             <input type="text" name="mealChoice" onChange={(e) => handleChange(idx, e)} required />
//           </label>
//           <label>
//             Special Requests:
//             <input type="text" name="specialRequests" onChange={(e) => handleChange(idx, e)} />
//           </label>

//         </div>
//       ))}
//       <button type='submit'>Submit RSVP</button>
//     </form>
//   )
// }

// export default RSVP
