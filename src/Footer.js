import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x" />;
const github = <FontAwesomeIcon icon={faGithub} size="4x" />;

export default function Footer() {
  return (
    <div className="footerBar">
      <button
        className="liBtn"
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/jade-kirkham";
        }}
      >
        {linkedin}
      </button>
      <button
        className="ghBtn"
        onClick={() => {
          window.location.href = "https://github.com/JaLeeKi";
        }}
      >
        {github}
      </button>
    </div>
  );
}
