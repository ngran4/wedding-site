import React, { useState } from "react";
import axios from "axios";
import "./EarlyRsvpForm.css";

// const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const EarlyRsvpForm = ({ group }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responses, setResponses] = useState(
    group.members.map((member) => ({
      guestId: member._id,
      fullName: member.fullName,
      earlyResponse: member.earlyResponse || "Pending",
    }))
  );

  const handleResponseChange = (guestId, val) => {
    // console.log('Changing response for guestId:', guestId, 'to', val);
    setResponses((prevResponses) => {
      const updatedResponses = prevResponses.map((response) =>
        response.guestId === guestId
          ? { ...response, earlyResponse: val }
          : response
      );
      // console.log('Updated responses:', updatedResponses);
      return updatedResponses;
    });
  };

  const handleSubmitResponse = async () => {
    try {
      await Promise.all(
        responses.map((response) => {
          const url = `/api/guests/${response.guestId}/early-response`;
          console.log(`Sending PATCH request to URL: ${url}`);
          axios.patch(`api/guests/${response.guestId}/early-response`, {
            earlyResponse: response.earlyResponse,
          });
        })
      );
      setIsSubmitted(true); 
    } catch (error) {
      console.error("Error submitting RSVP", error);
      alert("Error submitting RSVP");
    }
  };


  return (
    <div className="rsvp-form__container">
      {isSubmitted ? (
        <h2>Thank you! Your RSVP has been submitted!</h2>
      ) : (
        <>
          <h2 className="rsvp-title">{group.groupName}</h2>
          <p id="disclaimer">We recognize that a destination wedding is not feasible for everyone
            and will be planning a local event to celebrate with those who can't make it. Stay tuned for details!</p>
          {responses.map((response) => (
            <div className="group-members" key={response.guestId}>
              <label id="member-name">{response.fullName}</label>
              <div className="response-lbl">
                <label>
                  <input
                    type="radio"
                    name={`response-${response.guestId}`}
                    value="Yes"
                    checked={response.earlyResponse === "Yes"}
                    onChange={(e) =>
                      handleResponseChange(response.guestId, e.target.value)
                    }
                  />
                  Likely to attend
                </label>
                <label style={{display: "block", alignItems: "start"}}>
                  <input
                    type="radio"
                    name={`response-${response.guestId}`}
                    value="No"
                    checked={response.earlyResponse === "No"}
                    onChange={(e) =>
                      handleResponseChange(response.guestId, e.target.value)
                    }
                  />
                  Unlikely to attend
                </label>
              </div>
            </div>
          ))}
          <button className="btn rsvp-btn" onClick={handleSubmitResponse}>Submit</button>
        </>
      )}
    </div>
  );
};


export default EarlyRsvpForm;
