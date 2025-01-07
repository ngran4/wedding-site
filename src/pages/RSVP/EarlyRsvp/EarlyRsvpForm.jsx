import React, { useState } from "react";
import axios from "axios";
import "./EarlyRsvpForm.css";

// const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const EarlyRsvpForm = ({ group }) => {
  const [responses, setResponses] = useState(
    group.members.map((member) => ({
      guestId: member._id,
      fullName: member.fullName,
      earlyResponse: member.earlyResponse || "Pending",
    }))
  );

  const handleResponseChange = (guestId, val) => {
    setResponses((prevResponses) =>
      prevResponses.map((response) =>
        response.guestId === guestId
          ? { ...response, earlyResponse: val }
          : response
      )
    );
  };

  const handleSubmitResponse = async () => {
    try {
      await Promise.all(
        responses.map((response) =>
        axios.patch(`api/guests/${response.guestId}/early-response`, {
          earlyResponse: response.earlyResponse,
        })
        )
      );
      alert("Rsvp Submitted");
    } catch (error) {
      console.error("Error submitting RSVP", error);
      alert("Error submitting RSVP");
    }
  }


  return (
    <div>
      <h2>RSVP for Group: {group.groupName}</h2>
      {responses.map((response) => (
        <div key={response.guestId}>
          <label>{response.fullName}</label>
          <select
            value={response.earlyResponse}
            onChange={(e) => handleResponseChange(response.guestId, e.target.value)}
          >
            {/* <option value="Pending">Pending</option> */}
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      ))}
      <button onClick={handleSubmitResponse}>Submit</button>
    </div>
  );
};

// const EarlyRsvpForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
//       () => {
//         console.log("SUCCESS!");
//       },
//       (error) => {
//         console.log("FAILED...", error.text);
//       }
//     );
//   };

//   return (
//     <form className="rsvp-form" ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="guest_name" />
//       <label>Email</label>
//       <input type="email" name="guest_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

export default EarlyRsvpForm;
