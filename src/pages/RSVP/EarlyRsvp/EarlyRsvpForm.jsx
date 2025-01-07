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

  // const handleSubmitResponse = async () => {
  //   try {
  //     await Promise.all(responses.map(async (response) => {
  //       const url = `/api/guests/${response.guestId}/early-response`;
  //       console.log(`Sending PATCH request to: ${url}`);
  //       try {
  //         const res = await axios.patch(url, {
  //           earlyResponse: response.earlyResponse,
  //         });
  //         console.log('Response:', res);
  //       } catch (err) {
  //         console.error(`Error for guestId ${response.guestId}:`, err);
  //       }
  //     }));
  //     alert("Rsvp Submitted");
  //   } catch (error) {
  //     console.error("Error submitting RSVP", error);
  //     alert("Error submitting RSVP");
  //   }
  // };

  return (
    <div className="rsvp-form__container">
      {isSubmitted ? (
        <h2>Thank you! Your rsvp has been submitted!</h2>
      ) : (
        <>
          <h2>RSVP for Group: {group.groupName}</h2>
          {responses.map((response) => (
            <div key={response.guestId}>
              <label>{response.fullName}</label>
              <div>
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
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={`response-${response.guestId}`}
                    value="No"
                    checked={response.earlyResponse === "No"}
                    onChange={(e) =>
                      handleResponseChange(response.guestId, e.target.value)
                    }
                  />
                  No
                </label>
              </div>
            </div>
          ))}
          <button onClick={handleSubmitResponse}>Submit</button>
        </>
      )}
    </div>
  );
};


export default EarlyRsvpForm;
