import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="background-container">
        <div className="bg-1" />
        <Card />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
