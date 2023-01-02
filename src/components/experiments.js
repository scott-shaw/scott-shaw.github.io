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
            Various robot experiments (many not shown in research video submissions) from work completed in Guillaume Sartoretti's Multi-Agent Robotic Motion Lab (MARMoT Lab). In these experiments, the robot maintains stability solely through the use of center of mass (via IMU feedback) and foot positions (via the CPG). Additonally, the robot does not use any visual feedback or maps for any purpose in these experiments. The experiements contain both videos of tests run on the robot and videos of simulation results. 
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
