import React from "react";
import Accordian from "./Accordian";
import img from "./images/illustration-woman-online-desktop.svg";
import box from "./images/illustration-box-desktop.svg";
import shadow from "./images/bg-pattern-desktop.svg";

function Card() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="image-container">
          <img className="img lady-img" src={img} alt="meta" />
          <img className="img shadow-img" src={shadow} alt="meta" />
          <img className="img box-img" src={box} alt="meta" />
        </div>
        <div className="faq">
          <h1>faq</h1>
          <Accordian />
        </div>
      </div>
    </div>
  );
}

export default Card;
