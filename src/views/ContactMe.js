import React from "react";
import { useHistory } from "react-router-dom";
import "./ContactMe.css";

export default function ContactMe() {
  let history = useHistory();
  return (
    <div>
      <img src="/brutus.jpg" alt="noBrutus" className="brutus" />
      <h3 className="brutusGreet">Meet Brutus!</h3>
      <img src="/koda.jpg" alt="noKoda" className="koda" />
      <h3 className="kodaGreet">Say Hi To Koda!</h3>
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
      <form className="contactForm">
        <div className="formInfo">
          <label for="name">Name:</label>
          <input type="text" id="name" className="name" />
          <label for="contact">Best Contact:</label>
          <input type="text" id="contact" className="contact" />
          <label for="message">Message:</label>
          <input type="text" id="message" className="message" />
          <input type="submit" id="submitBtn" className="submitBtn" />
        </div>
      </form>
    </div>
  );
}
