import React from "react";

export default function LandingPage() {
  return (
    <div className="content">
      <div className="nameAddress">
        <h2 classname="name">Jade Kirkham</h2>
        <h3 className="address">Eagle Mountain, UT</h3>
      </div>
      <h1 className="title">Full Stack Web Developer</h1>
      <img src="/profilePic2.jpg" alt="profilePic" className="profilePic" />
      <p className="picDesc">Click me to download my Resume!</p>
      <div className="middleContent">
        <div className="attributes">
          <div className="attrAbout">
            <h1>About:</h1>
            <p className="aboutInfo">
              I spent the first 7 years of my professional career working in
              Customer Relations / Tech Support. I spent the next 2 years
              working as a Commerical Electrical Apprentice. Since then, I have
              found a passion for coding, unlike any other that I have
              experienced, and I am dedicated to making this my future. I have
              just graduated DevMountain and am looking for the right company to
              grow my roots with!
            </p>
          </div>
          <div className="attrSkills">
            <h1 className="skills">Skills:</h1>
            <ul className="skillsList">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>MySQL</li>
              <li>Scrum</li>
              <li>Agile Methodologies</li>
              <li>Chrome Dev Tools</li>
              <li>Customer Management</li>
              <li>Electrical Installation / Troubleshooting</li>
            </ul>
          </div>
          <div className="attrProjectsAndAwards">
            <h1>Projects:</h1>
            <ul className="projectsList">
              <li>
                <a href="https://random-pswrd.herokuapp.com/">
                  Random Password Generator
                </a>
              </li>
              <li>
                <a href="https://travel-assistant21.herokuapp.com/">
                  Travel-O-Matic
                </a>
              </li>
            </ul>
            <h1>Awards:</h1>
            <ul className="awardsList">
              <li>Eagle Scout - Boy Scouts of America</li>
              <li>2nd Place Utah Entrepeneur - Skills USA</li>
              <li>Graduated Web Dev Bootcamp - DevMountain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
