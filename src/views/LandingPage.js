import React from "react";

export default function LandingPage() {
  return (
    <div className="content">
      <div className="pageTitle">
        {/* <h1 className="title">Full Stack Web Developer</h1> */}
        <div className="titleLettersDiv">
          <span className="titleLettersF" content="F">
            F
          </span>
          <span className="titleLettersU" content="u">
            u
          </span>
          <span className="titleLettersL1" content="l">
            l
          </span>
          <span className="titleLettersL2" content="l">
            l
          </span>
        </div>
        <div className="titleLettersDiv">
          <span className="titleLettersS" content="S">
            S
          </span>
          <span className="titleLettersT" content="t">
            t
          </span>
          <span className="titleLettersA" content="a">
            a
          </span>
          <span className="titleLettersC" content="c">
            c
          </span>
          <span className="titleLettersK" content="k">
            k
          </span>
        </div>
        <div className="titleLettersDiv">
          <span className="titleLettersW" content="W">
            W
          </span>
          <span className="titleLettersE1" content="e">
            e
          </span>
          <span className="titleLettersB" content="b">
            b
          </span>
        </div>
        <div className="titleLettersDiv">
          <span className="titleLettersD" content="D">
            D
          </span>
          <span className="titleLettersE2" content="e">
            e
          </span>
          <span className="titleLettersV" content="v">
            v
          </span>
          <span className="titleLettersE3" content="e">
            e
          </span>
          <span className="titleLettersL3" content="l">
            l
          </span>
          <span className="titleLettersO" content="o">
            o
          </span>
          <span className="titleLettersP" content="p">
            p
          </span>
          <span className="titleLettersE4" content="e">
            e
          </span>
          <span className="titleLettersR" content="r">
            r
          </span>
        </div>
      </div>
      <div className="nameAdd">
        <h2 className="name">Jade Kirkham</h2>
        <h3 className="address">Eagle Mountain, UT</h3>
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
                <li className="skillsLi">Scrum Meetings</li>
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
