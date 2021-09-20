import React from "react";

import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  return (
    <div className="navBar">
      <img src="/logoFigmaV.png" alt="noImg" className="logoNav" />
      <button
        className="contactBtn"
        onClick={() => {
          history.push("/contact");
        }}
      >
        Contact Me!
      </button>
    </div>
  );
}
