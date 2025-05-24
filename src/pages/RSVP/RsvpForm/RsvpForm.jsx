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
      mealPreference: member.rsvp?.mealPreference || {
        firstCourse: "",
        secondCourse: "",
      },
      welcomeDinnerRsvp: member.welcomeDinnerRsvp || "Not Invited",
    }))
  );

  const handleResponseChange = (guestId, field, val) => {
    // console.log('Changing response for guestId:', guestId, 'to', val);
    setResponses((prevResponses) => {
      const updatedResponses = prevResponses.map((response) =>
        response.guestId === guestId ? { ...response, [field]: val } : response
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
        <>
          <h2>Thank you! Your RSVP has been submitted!</h2>
          <p>click here to view the Registry</p>
        </>
      ) : (
        <>
          <h2 className="rsvp-title">{group.groupName}</h2>
          <p id="disclaimer">
            We recognize that a destination wedding is not feasible for everyone
            and will be planning a local event to celebrate with those who can't
            make it. Stay tuned for details!
          </p>
          {responses.map((response) => (
            <div className="group-members" key={response.guestId}>
              <label id="member-name">{response.fullName}</label>
              <div className="rsvp-btns">
                <button
                  type="button"
                  className={`btn rsvp-option ${response.response === "Accepted" ? "selected" : ""}`}
                  value="Accepted"
                  onClick={(e) =>
                    handleResponseChange(
                      response.guestId,
                      "response",
                      e.target.value
                    )
                  }
                >
                  ACCEPT
                </button>
                <button
                  type="button"
                  className={`btn rsvp-option ${response.response === "Declined" ? "selected" : ""}`}
                  value="Declined"
                  onClick={(e) =>
                    handleResponseChange(
                      response.guestId,
                      "response",
                      e.target.value
                    )
                  }
                >
                  DECLINE
                </button>
              </div>

              {response.response === "Accepted" && (
                <>
                  <div className="meal-preferences">
                    <div className="fc-response">
                      <label>First Course Preference:</label>
                      <div className="meal-btns">
                        <button
                          type="button"
                          className={`meal-option ${response.mealPreference.firstCourse === "Risotto" ? "selected" : ""}`}
                          onClick={() =>
                            handleResponseChange(
                              response.guestId,
                              "mealPreference",
                              {
                                ...response.mealPreference,
                                firstCourse: "Risotto",
                              }
                            )``
                          }
                        >
                          Saffron Risotto
                        </button>
                        <button
                          type="button"
                          className={`meal-option ${response.mealPreference.firstCourse === "Nest" ? "selected" : ""}`}
                          onClick={() =>
                            handleResponseChange(
                              response.guestId,
                              "mealPreference",
                              {
                                ...response.mealPreference,
                                firstCourse: "Nest",
                              }
                            )
                          }
                        >
                          Pasta Swallow's Nest
                        </button>
                      </div>
                    </div>
                    <div className="sc-response">
                      <label>Second Course Preference:</label>
                      <div className="meal-btns">
                        <button
                          type="button"
                          className={`meal-option ${response.mealPreference.secondCourse === "Fillet" ? "selected" : ""}`}
                          onClick={() =>
                            handleResponseChange(
                              response.guestId,
                              "mealPreference",
                              {
                                ...response.mealPreference,
                                secondCourse: "Fillet",
                              }
                            )
                          }
                        >
                          Robespierre Fillet
                        </button>
                        <button
                          type="button"
                          className={`meal-option ${response.mealPreference.secondCourse === "Pata Negra" ? "selected" : ""}`}
                          onClick={() =>
                            handleResponseChange(
                              response.guestId,
                              "mealPreference",
                              {
                                ...response.mealPreference,
                                secondCourse: "Pata Negra",
                              }
                            )
                          }
                        >
                          Pata Negra Ingot
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="special-request">
                    <label className="special-request-label">
                      Special Requests{" "}
                      <span id="parentheses">
                        (allergies, dietary restrictions, etc.):
                      </span>
                      <textarea
                        value={response.specialRequests || ""}
                        onChange={(e) =>
                          handleResponseChange(
                            response.guestId,
                            "specialRequests",
                            e.target.value
                          )
                        }
                        rows="4" // Adjust the number of rows for height
                        cols="50" // Adjust the number of columns for width
                        style={{ resize: "none" }} // Optional: Prevent resizing
                      />
                    </label>
                  </div>
                </>
              )}
              {response.welcomeDinnerRsvp !== "Not Invited" && (
                <div>
                  <label>Welcome Dinner:</label>
                  <div className="rsvp-btns">
                    <button
                      type="button"
                      className={`btn welcome-option ${response.welcomeDinnerRsvp === "Accepted" ? "selected" : ""}`}
                      value="Accepted"
                      onClick={(e) =>
                        handleResponseChange(
                          response.guestId,
                          "welcomeDinnerRsvp",
                          e.target.value
                        )
                      }
                    >
                      ACCEPT
                    </button>
                    <button
                      type="button"
                      className={`btn welcome-option ${response.welcomeDinnerRsvp === "Declined" ? "selected" : ""}`}
                      value="Declined"
                      onClick={(e) =>
                        handleResponseChange(
                          response.guestId,
                          "welcomeDinnerRsvp",
                          e.target.value
                        )
                      }
                    >
                      DECLINE
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button className="btn rsvp-btns" onClick={handleSubmitResponse}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default RsvpForm;
