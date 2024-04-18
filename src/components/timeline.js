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
          <p>{str}<br />[...]</p>
        </div>
        <div id={tid} class="collapse">
          {hidden}
        </div>
      </div>
    );
  };

  linkHandler = (e) => {
    e.stopPropagation();
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
                "Helping make more general purpose and intelligent robots.",
                <a href="https://theaiinstitute.com/">theaiinstitute.com</a>,
                "hidden-bdai",
              )}
            </li>

            {/* Gait Generation (2nd research) */}
            <li class="timeline-item mb-5">
              {this.collapsableListItem(
                "Online Gait Generation on a Hexapod Robot",
                "April 2022",
                "Built off of initial work focused on gait transitions to generation stable gaits online in response to joint failures.",
                <iframe
                  title="onebreak"
                  width="50%"
                  height="360"
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
                  Joined the <a onClick={this.linkHandler} href="https://www.marmotlab.org/">MARMoT Lab</a>{" "}
                  at the National University of Singapore. Researched online
                  gait transitions using a CPG (Central Pattern Generator)
                  controller on a hexapod robot (
                  <a href="https://www.hebirobotics.com/robotic-mobile-platforms">
                    HEBI Daisy
                  </a>
                  ). A <a href={cdcpaper}>paper</a> describing this work was
                  published at CDC 2022.
                </p>,
                <iframe
                  title="gaittransition"
                  width="50%"
                  height="360"
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
