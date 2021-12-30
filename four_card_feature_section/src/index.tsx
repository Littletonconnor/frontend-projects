import React from "react";
import ReactDOM from "react-dom";
import supervisor from "./images/icon-supervisor.svg";
import calculator from "./images/icon-calculator.svg";
import karma from "./images/icon-karma.svg";
import teamBuilder from "./images/icon-team-builder.svg";

import "./index.css";
import "./globals.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="title">
        <span className="light-title">Reliable, efficient delivery</span>
        <br />
        Powered by Technology
      </h1>
      <div style={{ paddingBottom: 20 }} />
      <p className="title-text">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div style={{ paddingBottom: 50 }} />
      <div className="cards-container">
        <Card
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          src={supervisor}
          style={{ borderTop: `4px solid var(--cyan)` }}
        />
        <div className="cards-container-nested">
          <Card
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            src={teamBuilder}
            style={{ borderTop: `4px solid var(--red)` }}
          />
          <Card
            title="Karma"
            description="Regularly evualates our talent to ensure quality"
            src={karma}
            style={{ borderTop: `4px solid var(--orange)` }}
          />
        </div>
        <Card
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          src={calculator}
          style={{ borderTop: `4px solid var(--blue)` }}
        />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

interface Props {
  title: string;
  description: string;
  src: string;
  style: any;
}

function Card({ title, description, src, style }: Props) {
  return (
    <div className="card-container" style={style}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{description}</p>
      <div style={{ paddingBottom: 30 }} />
      <img className="card-icon" src={src} alt="icon" height={50} width={50} />
    </div>
  );
}
