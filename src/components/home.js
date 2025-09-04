import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/home.css";
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
            <h3>Hello</h3>
            <p>
              Scott Shaw | Boston, MA
              <hr />
            </p>
            <h3>About</h3>
            <p>
              I'm currently working as an Applied Scientist at the <a href="https://rai-inst.com" target="_blank" rel="noreferrer">RAI Institute</a>. Previously, I finished my B.S. in Computer Science at Northeastern University, concentrating in Artificial Intelligence. During this time, I also worked as a researcher under Professor Guillaume Sartoretti at the <a href="https://www.marmotlab.org/" target="_blank" rel="noreferrer">Multi-Agent Robotic Motion Laboratory</a> at the National University of Singapore; my work focused on gait design and gait transitions for legged robots.
              <br />
            </p>

            <div class="row">
              {/* Links */}
              <div class="col-sm">
                <h3>Links</h3>
                <a
                  href="https://scottshawphoto.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Photography
                </a>
                <br />
                <a
                  href="https://github.com/scott-shaw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <br />
                <a
                  href="https://scholar.google.com/citations?user=msr0dhcAAAAJ&hl=en&oi=sra"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar
                </a>
              </div>

              {/* Contact Info */}
              <div class="col-sm">
                <h3>Contact</h3>
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

          {/* Profile Picture */}
          <div class="col-sm">
            <div class="profile">
              <img alt="" src={require('../assets/files/profile.jpg')} width="100%"/>
            </div>
          </div>
        </div>

        <div class="row">
          {/* Projects */}
          <Timeline />
        </div>

        {/* Footer */}
        <footer class="container-fluid">
          <hr />
          <p>Scott Shaw | 2025</p>
        </footer>
      </body>
    );
  }
}

export default Home;
