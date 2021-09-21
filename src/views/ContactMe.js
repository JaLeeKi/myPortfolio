import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./ContactMe.css";

export default function ContactMe({
  name,
  setName,
  contact,
  setContact,
  message,
  setMessage,
}) {
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3005/send",
      data: { name, contact, message },
    }).then((response) => {
      if (response.data.status === "success") {
        setName("");
        setContact("");
        setMessage("");
        swal({
          title: "Great!",
          text: "Your message was sent!",
          icon: "success",
        });
      } else if (response.data.status === "fail") {
        swal({
          title: "Oh, no!",
          text: "There was an error sending your message.",
          icon: "error",
        });
      }
    });
  }

  return (
    <div>
      {/* <img src="/brutus.jpg" alt="noBrutus" className="brutus" />
      <h3 className="brutusGreet">Meet Brutus!</h3>
      <img src="/koda.jpg" alt="noKoda" className="koda" />
      <h3 className="kodaGreet">Say Hi To Koda!</h3> */}
      <div className="logoAndDesc">
        <img
          src="/logoFigmaV.png"
          alt="noImg"
          className="logo"
          //onHover to say BACK
          onClick={() => {
            history.push("/");
          }}
        />
        <p className="logoDesc">(back to home)</p>
      </div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formInfo">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            className="name"
            placeholder="First and Last Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="contact">Best Contact:</label>
          <input
            type="text"
            id="contact"
            className="contact"
            placeholder="Email and/or Phone Number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <label for="message">Message:</label>
          <textarea
            rows="5"
            cols="50"
            id="message"
            className="message"
            name="message"
            placeholder="Your Message Here"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input type="submit" id="submitBtn" className="submitBtn" />
        </div>
      </form>
    </div>
  );
}
