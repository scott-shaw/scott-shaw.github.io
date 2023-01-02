import React from "react";
import "../style/research.css";
import paper from "../assets/files/CDC2022-kuramotoCPG.pdf"

class Research extends React.Component {
  constructor() {
    super();
      this.state = {};
  }

  componentDidMount() {
    document.title = "Scott Shaw: Research"
  }

  render() {
    return (
      <body>
      <section class="text-center mt-3">
        <div class="container text-center">
          <h1 class="">Research</h1>
        </div>
      </section>
      <div class="container marketing">
        <div class="row featurette">
          <div class="col-md-6">
            <h2 class="featurette-heading">Keyframe-based CPG for Stable Gait Design and Online Transitions in
Legged Robots</h2>
            <p class="featurette-description">While animals easily and seamlessly transition between gaits to overcome challenging environments, current
methods to design stable gait transitions often rely on computationally expensive optimization. In this work, we introduce a central pattern generator (CPG) model that allows intuitive gaitdefinition and online, real-time gait transitions while ensuring stability and forward progression. Specifically, we propose to rely on keyframes – discrete key leg configurations that can be sequenced into a gait – to define arbitrary legged gaits. We introduce a new task-space CPG, which relies on the well-known Kuramoto model and a new feedforward term to ensure synchronized convergence to these keyframes. We then show how this framework can naturally be extended to allow arbitrary gait transitions by developing two stabilization techniques. First, we reason about the robot’s predicted stability to disable specific oscillator updates during transition, while minimizing the resulting effect on forward locomotion. Second, we control the robot’s body position within the grounded legs to ensure current and predicted stability based on inexpensive forward prediction of the CPG model. We validate our approach by presenting simulation and experimental results on a hexapod robot following and transitioning among hexapedal and quadrupedal gaits in a number of indoor and outdoor locomotion and mobile manipulation scenarios.</p>
            <p>
              <a class="btn btn-secondary paper-buttons" href={paper} role="button">View PDF &raquo;</a>
              <a class="btn btn-secondary paper-buttons" href={"https://www.youtube.com/playlist?list=PLKiMICJzRdz7QOVwizHeulsRKGM7uVb7O"} role="button">Video Playlist &raquo;</a>
            </p>
          </div>
          <div class="featurette-heading col-md-6">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe width="400" height="315" src="https://www.youtube.com/embed/MwdPQ0rqQuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="featurette-description col-md-12">
            <p>
              <b>Shaw, S.</b>, Sartoretti, G., 2022, December. Keyframe-based CPG for Stable Gait Design and Online Transitions in Legged Robots. In 2022 Conference on Decision and Control (CDC). IEEE.
            </p>
          </div>
        </div>

        <hr class="featurette-divider"></hr>


      </div>


      <footer class="container">
        <p>Scott Shaw | 2023</p>
      </footer>
      </body>
      
    );
  }
}

export default Research;
