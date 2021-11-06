import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import topCircle from "./images/bg-pattern-top.svg";
import bottomCircle from "./images/bg-pattern-bottom.svg";
import "./globals.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <img src={topCircle} alt="background circle" className="top-circle" />
      <img
        src={bottomCircle}
        alt="background circle"
        className="bottom-circle"
      />
      <Card />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
