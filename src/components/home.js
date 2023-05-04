import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import cdcpaper from "../assets/files/CDC2022-kuramotoCPG.pdf"
import "../style/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Home extends React.Component {
  constructor() {
    super();
      this.state = {};
  }

  componentDidMount() {
    document.title = "Scott Shaw: Home"
  }

  render() {
    return (
      <body>
        <main>
          <div class="container">
          <div class="row">
            <div class="col-md-9">
              <h1 class="display-3"><strong>Scott Shaw</strong></h1>
              <p>
                  I'm a recent graduate from Northeastern University with a B.S. in Computer Science, concentrated in Artificial Intelligence, and a minor in Mathematics. 
                  <br></br> I'm interested in robotics and developing new technology for robots.
                  <br></br> <br></br> You can contact me at shaw.sc@northeastern.edu | 267-273-4960. 
                  <a class="brandIconsProfileGithub fa-2x" href="https://github.com/scott-shaw"><FontAwesomeIcon icon={faGithubSquare} /></a>
                  <a class="brandIconsProfileLinkedin fa-2x" href="https://www.linkedin.com/in/scottmshaw/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </p>
            </div>
            <div class="col-md-3">
              <img alt="" src={require('../assets/images/DSCF3765-crop.jpg')} width={250} height={250} classname="portrait"/> 
            </div>
            
          </div>
        </div>
        </main>
        <br></br>
        <news>
          <div class="container">
        <div class="mb-4">
          <h1>News</h1>
        </div>

        <div class="row">
          <div class="col-md-12 pt-3">
            <h3>December 6, 2022: Paper Presented at CDC 2022</h3>
            <p>Our <a href={cdcpaper}>paper</a> on Keyframe-Based, CPG Gait Transitions was presented at CDC 2022 in Cancún, Mexico.</p>
          </div>
          <div class="col-md-12 pt-3">
            <h3>July 15, 2022: Paper Accepted at CDC 2022</h3>
            <p>Our <a href={cdcpaper}>paper</a>, which summarizes our work on Keyframe-Based Gait Transitions, was accepted for presenation at CDC 2022 (December 6-9, Cancún, Mexico).</p>
          </div> 
          <div class="col-md-12">
            <h3>April 1, 2022: Began Researching Online Gait Generation</h3>
            <p>Working towards another publication which builds off of previous work on gait transitions. </p>
          </div>
          <div class="col-md-12 pt-3">
            <h3>January 28, 2022: Returned to MARMot Lab to continue research</h3>
            <p>Continued previous research, worked toward a publication, and started working towards another publication.</p>
          </div>
          <div class="col-md-12 pt-3">
            <h3>January 26, 2021: Started as a Researcher at the National University of Singapore (<a href="https://www.marmotlab.org/">MARMoT Lab</a>)</h3>
            <p>Began research with a hexapod robot (<a href="https://www.hebirobotics.com/robotic-mobile-platforms">HEBI Daisy</a>), focusing on gait transitions and stability during leg failure during a six month co-op (working remotely). </p>
          </div>
        </div>
        <hr></hr>
      </div> 
        </news>
        <footer class="container">
          <p>Scott Shaw | 2023</p>
        </footer>
      </body>
      
    );
  }
}

export default Home;
