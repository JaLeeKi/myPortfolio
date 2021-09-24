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
      <a
        href="/Resume-Jade-Kirkham.pdf"
        download="Jade_Kirkham_Resume"
        className="imgHover"
      >
        <img src="/profilePic2.jpg" alt="profilePic" className="profilePic" />
        <img src="/jadeDarah.jpg" alt="profilePic2" className="profilePic" />
      </a>
      <p className="picDesc">(Click pic to download my Resume!)</p>
      <div className="middleContent">
        <div className="attributes">
          <div className="attrAbout">
            <div className="aboutExpand">
              <h1>ABOUT:</h1>
              <p className="aboutInfo">
                I spent the first 7 years of my professional career working in
                Customer Relations / Tech Support. I spent the next 2 years
                working as a Commerical Electrical Apprentice. Since then, I
                have found a passion for coding, unlike any other that I have
                experienced, and I am dedicated to making this my future. I have
                just graduated DevMountain and am looking for the right company
                to grow my roots with!
              </p>
            </div>
          </div>
          <div className="attrSkills">
            <div className="skillsExpand">
              <h1 className="skills">SKILLS:</h1>
              <ul className="skillsList">
                <li className="skillsLi">React</li>
                <li className="skillsLi">JavaScript</li>
                <li className="skillsLi">HTML5</li>
                <li className="skillsLi">CSS3</li>
                <li className="skillsLi">Node.js</li>
                <li className="skillsLi">Git</li>
                <li className="skillsLi">GitHub</li>
                <li className="skillsLi">MySQL</li>
                <li className="skillsLi">PostgreSQL</li>
                <li className="skillsLi">Creating / Consuming API's</li>
                <li className="skillsLi">Agile Methodologies</li>
                <li className="skillsLi">Scrum</li>
                <li className="skillsLi">Visual Studio Code</li>
                <li className="skillsLi">Chrome Dev Tools</li>
                <li className="skillsLi">Customer Management</li>
                <li className="skillsLi">
                  Electrical Installation / Troubleshooting
                </li>
              </ul>
            </div>
          </div>
          <div className="attrProjectsAndAwards">
            <div className="projectExpand">
              <h1 className="projTitle">PROJECTS:</h1>
              <p className="hint">(Best if viewed on a monitor)</p>
              <ul className="projectsList">
                <div className="projExpand">
                  <li className="projLi">
                    <a href="https://random-pswrd.herokuapp.com/">
                      Random Password Generator
                    </a>
                    <p className="projDesc">(JavaScript, CSS3, HTML5)</p>
                    <p className="projSrc">
                      <a href="https://github.com/JaLeeKi/random-pswrd">
                        Source Code
                      </a>
                    </p>
                  </li>
                </div>
                <div className="projExpand">
                  <li className="projLi">
                    <a href="https://travel-assistant21.herokuapp.com/">
                      Travel-O-Matic
                    </a>
                    <p className="projDesc">(React, JavaScript, CSS3)</p>
                    <p className="projSrc">
                      <a href="https://github.com/JaLeeKi/reactCapstone/tree/main/travel-assistant">
                        Source Code
                      </a>
                    </p>
                  </li>
                </div>
              </ul>
            </div>
            <div className="awardExpand">
              <h1 className="awardsTitle">AWARDS:</h1>
              <ul className="awardsList">
                <li className="awardsLi">
                  Graduated Web Dev Bootcamp - DevMountain
                </li>
                <li className="awardsLi">
                  Eagle Scout - Boy Scouts of America
                </li>
                <li className="awardsLi">
                  2nd Place Utah Entrepreneur - Skills USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
