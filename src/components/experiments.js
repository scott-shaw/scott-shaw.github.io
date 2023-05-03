import React from "react";
import "../style/experiments.css";

class Experiments extends React.Component {
  constructor() {
    super();
      this.state = {};
  }

  componentDidMount() {
    document.title = "Scott Shaw: Experiments"
  }

  render() {
    return (
      <body>
        <section class="text-center py-3">
          <div class="container">
            <h1 class="">Robot Experiments</h1>
          </div>
        </section>

        <div class="container">

          <div class="card-text mb-4">
            Various robot experiments (many not shown in research video submissions) from work completed in Guillaume Sartoretti's Multi-Agent Robotic Motion Lab (MARMoT Lab) and past/present robotics works and projects. In experiments from MARMoT Lab work (featuring a hexapod), the robot maintains stability solely through the use of center of mass (via IMU feedback) and foot positions (via the CPG). Additonally, the robot does not use any visual feedback or maps for any purpose in these experiments. The experiements contain both videos of tests run on the robot and videos of simulation results. 
          </div>

          <div class="row">

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="mobile" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/MwdPQ0rqQuk" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Hexapod robot changes gait to allow for mobile manipulation of a small container.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">March, 2022</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="outdoors" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/fpaAPsikysc" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Hexapod robot changes gait to enable better environmental traversal on a changing terrain.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">March, 2022</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="twobreak" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/-sRoIG9ahm4" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Hexapod robot generates and transitions to a five-legged gait online in response to losing control of its center right leg.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">May, 2022</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="onebreak" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/wACxMcUS-y0" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Hexapod robot generates and transitions to a quadrupedal gait in response to losing control of its two front legs.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">May, 2022</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="mobile" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/iZNPsC2-rWI" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">6-DoF robot arm using RRT path planning algorithm for a pick-and-place application.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">April, 2023</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="onebreak" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/o58jLqViBe8" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Demonstration of angle-changing flywheel hood on 2018-2019 VEX robot.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">March, 2019</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="onebreak" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/acPz-Bih3i8" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Driver control test of VEX robot for 2018-2019 season in preparation for the World Championship.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">March, 2019</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 box-shadow">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="onebreak" class="embed-responsive-item" width="100%" height="360" src="https://www.youtube.com/embed/ed4Sxj0Tbyg" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <p class="card-text">Fully autonomous "skills" run for the 2016-2017 VEX season (within the top 10 skills scores in the world).</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">April, 2017</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <footer class="container">
          <p>Scott Shaw | 2023</p>
        </footer>
      </body>
    );
  }
}

export default Experiments;
