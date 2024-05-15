import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/home.css";
import cv from "../assets/files/Scott-Shaw-CV.pdf";
import Timeline from "./timeline";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.title = "Scott Shaw";
  }

  render() {
    return (
      <body class="container-fluid">
        <div class="row name-header">

          {/* Introduction */}
          <div class="col-sm">
            <h3># Hello</h3>
            <p>
              Scott Shaw | Boston, MA
              <hr />
            </p>
            <h6>What I'm interested in</h6>
            <p>
              Robotics | Legged Robots, Mobile Manipulation
              <br />
              Software | Python, C++, Bash, Lua
              <br />
              Photography | Travel, Street
              <br />
              <br />
            </p>
            <h6>Experience</h6>
            <div class="row">
              <div class="col-sm">
                <p>
                  Applied Scientist
                  <br />
                  Student Researcher
                  <br />
                  B.S., Computer Science
                </p>
              </div>
              <div class="col-sm">
                <p>
                  The AI Institute
                  <br />
                  MARMoT Lab @ NUS
                  <br />
                  Northeastern University
                </p>
              </div>
            </div>

            <div class="row">
              {/* Links */}
              <div class="col-sm">
                <h3># Links</h3>
                <a
                  href="https://github.com/scott-shaw"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                <br />
                <a
                  href="https://scottshawphoto.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  photography
                </a>
                <br />
                <a href={cv} target="_blank" rel="noreferrer">
                  resume
                </a>
              </div>

              {/* Contact Info */}
              <div class="col-sm">
                <h3># Contact</h3>
                <a href="mailto:scottshawm@gmail.com">email</a>
                <br />
                <a
                  href="https://www.linkedin.com/in/scottmshaw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin
                </a>
              </div>
            </div>
          </div>

          {/* Cat ASCII art */}
          <div class="col-sm">
            <p>
              <pre>{`
      +

               *       +
         '                  |
      o    .-.,="''"=.    - o -
           '=/_       \\     |
        *   |  '=._    |
             \\     '=./',        '
          .   '=.__.=' '='      *
 +                         +
      O      *        '       .
                `}</pre>
            </p>
          </div>
        </div>

        <div class="row">
          {/* Projects */}
          <Timeline />
        </div>

        {/* Footer */}
        <footer class="container-fluid">
          <hr />
          <p>Scott Shaw | 2024</p>
        </footer>
      </body>
    );
  }
}

export default Home;
