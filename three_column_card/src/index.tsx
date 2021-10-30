import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./globals.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Cards />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
