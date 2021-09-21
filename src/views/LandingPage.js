import React from "react";

export default function LandingPage() {
  return (
    <div className="content">
      <div className="nameAddress">
        <h1 className="title">Full Stack Web Developer</h1>
        <div className="smallNameAdd">
          <h2 className="name">Jade Kirkham</h2>
          <h3 className="address">Eagle Mountain, UT</h3>
        </div>
      </div>
      <a href="/Resume-Jade-Kirkham.pdf" download="Jade_Kirkham_Resume">
        <img src="/profilePic2.jpg" alt="profilePic" className="profilePic" />
      </a>
      <p className="picDesc">Click me to download my Resume!</p>
      <div className="middleContent">
        <div className="attributes">
          <div className="attrAbout">
            <h1>ABOUT:</h1>
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
            <h1 className="skills">SKILLS:</h1>
            <ul className="skillsList">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Scrum</li>
              <li>Agile Methodologies</li>
              <li>Chrome Dev Tools</li>
              <li>Customer Management</li>
              <li>Electrical Installation / Troubleshooting</li>
            </ul>
          </div>
          <div className="attrProjectsAndAwards">
            <h1 className="projTitle">PROJECTS:</h1>
            <p className="hint">(Best if viewed on a monitor)</p>
            <ul className="projectsList">
              <li>
                <a href="https://random-pswrd.herokuapp.com/">
                  Random Password Generator
                </a>
                <p className="twoMonths">(2-Months into Bootcamp)</p>
              </li>
              <li>
                <a href="https://travel-assistant21.herokuapp.com/">
                  Travel-O-Matic
                </a>
                <p className="fourMonths">(4-Months into Bootcamp)</p>
              </li>
            </ul>
            <h1 className="awardsTitle">AWARDS:</h1>
            <ul className="awardsList">
              <li>Graduated Web Dev Bootcamp - DevMountain</li>
              <li>Eagle Scout - Boy Scouts of America</li>
              <li>2nd Place Utah Entrepreneur - Skills USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
