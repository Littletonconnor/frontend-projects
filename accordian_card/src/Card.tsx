import React from "react";
import Accordian from "./Accordian";

function Card() {
  return (
    <div className="container">
      <div className="card-container">
        <div>Image Stuff</div>
        <div className="faq">
          <h1>faq</h1>
          <Accordian />
        </div>
      </div>
    </div>
  );
}

export default Card;
