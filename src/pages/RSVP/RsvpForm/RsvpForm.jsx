import React, { useState } from "react";
import axios from "axios";
import "./RsvpForm.css";

// const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const RsvpForm = ({ group }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responses, setResponses] = useState(
    group.members.map((member) => ({
      guestId: member._id,
      fullName: member.fullName,
      response: member.rsvp?.response || "Pending",
      mealPreference: member.rsvp?.mealPreference || { firstCourse: "", secondCourse: "" },
      welcomeDinnerRsvp: member.welcomeDinnerRsvp || "Not Invited",
    }))
  );

  const handleResponseChange = (guestId, field, val) => {
    // console.log('Changing response for guestId:', guestId, 'to', val);
    setResponses((prevResponses) => {
      const updatedResponses = prevResponses.map((response) =>
        response.guestId === guestId
          ? { ...response, [field]: val }
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
          const url = `/api/guests/${response.guestId}/rsvp`;
          // console.log(`Sending PATCH request to URL: ${url}`);
          axios.patch(url, {
            rsvp: {
            response: response.response,
            mealPreference: response.mealPreference,
            specialRequests: response.specialRequests,
            },
            welcomeDinnerRsvp: response.welcomeDinnerRsvp,
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
                    value="Accepted"
                    checked={response.response === "Accepted"}
                    onChange={(e) =>
                      handleResponseChange(response.guestId, e.target.value)
                    }
                  />
                  Attending
                </label>
                <label style={{display: "block", alignItems: "start"}}>
                  <input
                    type="radio"
                    name={`response-${response.guestId}`}
                    value="No"
                    checked={response.response === "No"}
                    onChange={(e) =>
                      handleResponseChange(response.guestId, e.target.value)
                    }
                  />
                  Not Attending
                </label>
              </div>
              {response.response === "Accepted" && (
                <>
                <div>
                  <label> 
                    First Course Preference: 
                    <select
                      value={response.mealPreference.firstCourse}
                      onChange={(e) =>
                        handleResponseChange(response.guestId, "mealPreference", {
                          ...response.mealPreference,
                          firstCourse: e.target.value,
                        })
                      }
                      >
                        <option value="">Select</option>
                        <option value="Risotto">Saffron Risotto</option>
                        <option value="Nest">Pasta nest stuffed with mozzarella di buffalo in tomato sauce</option>
                      </select>
                  </label>
                </div>
                <div>
                    <label>
                      Second Course Preference:
                      <select
                        value={response.mealPreference.secondCourse}
                        onChange={(e) =>
                          handleResponseChange(response.guestId, "mealPreference", {
                            ...response.mealPreference,
                            secondCourse: e.target.value,
                          })
                        }
                      >
                        <option value="">Select</option>
                        <option value="Fillet">Robespierre Fillet</option>
                        <option value="Pata Negra">Pata Negra Ingot</option>
                      </select>
                    </label>
                  </div>
                </>
              )}
              {response.welcomeDinnerRsvp !== "Not Invited" && (
                <div>
                  <label>
                    Welcome Dinner:
                    <select
                      value={response.welcomeDinnerRsvp}
                      onChange={(e) =>
                        handleResponseChange(response.guestId, "welcomeDinnerRsvp", e.target.value)
                      }
                    >
                      <option value="Accepted">Attending</option>
                      <option value="Declined">Not Attending</option>
                    </select>
                  </label>
                </div>
              )}
            </div>
          ))}
          <button className="btn rsvp-btn" onClick={handleSubmitResponse}>Submit</button>
        </>
      )}
    </div>
  );
};


export default RsvpForm;
