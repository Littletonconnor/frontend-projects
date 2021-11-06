import React from "react";
import waves from "./images/bg-pattern-card.svg";
import avatar from "./images/image-victor.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
          <img src={waves} alt="waves" className="waves" />
          <img src={avatar} alt="waves" className="avatar" />
        </div>
        <div className="card-content">
          <div className="inline">
            <h1>Victor Crest</h1>
            <span>26</span>
          </div>
          <p>London</p>
        </div>
        <div className="card-footer">
          <div className="card-footer-content">
            <span className="a">80K</span>
            <span className="b">Followers</span>
          </div>
          <div className="card-footer-content">
            <span className="a">803K</span>
            <span className="b">Likes</span>
          </div>
          <div className="card-footer-content">
            <span className="a">1.4K</span>
            <span className="b">Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
