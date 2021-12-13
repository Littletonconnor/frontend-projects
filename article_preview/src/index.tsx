import React from "react";
import ReactDOM from "react-dom";
import drawers from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";
import iconShare from "./images/icon-share.svg";

import "./globals.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <main className="container">
      <Card />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <img src={drawers} alt="some nice of drawers" />
        </div>
        <div className="card-content">
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div className="card-footer">
          <img src={avatar} height="40" width="40" alt="avatar of michelle" />
          <div className="card-footer-info">
            <p>Michelle Appleton</p>
            <span>28 Jun 2020</span>
          </div>
          <div className="circle">
            <img src={iconShare} height="20" width="20" alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
}
