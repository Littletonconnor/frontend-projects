import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./globals.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="outer-container">
      <Card />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
