import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/timeline.css";
import cdcpaper from "../assets/files/CDC2022-kuramotoCPG.pdf";
import "bootstrap/js/src/collapse.js";

class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  collapsableListItem = (title, date, str, hidden, tid) => {
    return (
      <div>
        <div
          class="div-outline"
          data-bs-toggle="collapse"
          data-bs-target={"#" + tid}
        >
          <h5 class="fw-bold">{title}</h5>
          <p class="mb-2 fw-bold">{date}</p>
          {str}
        </div>
        <div id={tid} class="collapse">
          {hidden}
        </div>
      </div>
    );
  };

  linkHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(e.currentTarget.href, '_blank');
  }

  componentDidMount() {
    document.title = "Scott Shaw";
  }

  render() {
    return (
      <body class="container-fluid">
        <section class="py-5">
          <ul class="timeline">
            {/* BDAI */}
            <li class="timeline-item mb-5">
              {this.collapsableListItem(
                "The AI Institute",
                "September 2023",
                <p>Applied Scientist</p>,
                <a onClick={this.linkHandler} href="https://theaiinstitute.com/">theaiinstitute.com</a>,
                "hidden-bdai",
              )}
            </li>

            {/* Gait Generation (2nd research) */}
            <li class="timeline-item mb-5">
              {this.collapsableListItem(
                "Online Gait Generation on a Hexapod Robot",
                "April 2022",
                <p>Built off of initial work focused on gait transitions to generation stable gaits online in response to joint failures.</p>,
                <iframe
                  title="onebreak"
                  src="https://www.youtube.com/embed/wACxMcUS-y0"
                  allowfullscreen
                ></iframe>,
                "hidden-leg-break",
              )}
            </li>

            {/* Gait Transitions (1st research) */}
            <li class="timeline-item mb-5">
              {this.collapsableListItem(
                "Keyframe-Based Gait Transitions Using a CPG Controller",
                "January 2021",
                <p>
                  Joined the <a data-bs-toggle="collapse" onClick={this.linkHandler} href="https://www.marmotlab.org/">MARMoT Lab</a>{" "}
                  at the National University of Singapore. Researched online
                  gait transitions using a CPG (Central Pattern Generator)
                  controller on a hexapod robot (
                  <a data-bs-toggle="collapse" onClick={this.linkHandler} href="https://www.hebirobotics.com/robotic-mobile-platforms">
                    HEBI Daisy
                  </a>
                  ). A <a data-bs-toggle="collapse" onClick={this.linkHandler} href={cdcpaper}>paper</a> describing this work was
                  published at CDC 2022.
                </p>,
                <iframe
                  title="gaittransition"
                  src="https://www.youtube.com/embed/MwdPQ0rqQuk"
                  allowfullscreen
                ></iframe>,
                "hidden-gait-video",
              )}
            </li>
          </ul>
        </section>
      </body>
    );
  }
}

export default Timeline;
