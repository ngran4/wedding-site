import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EarlyRsvpForm.css";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const EarlyRsvpForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <form className="rsvp-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="guest_name" />
      <label>Email</label>
      <input type="email" name="guest_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
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
