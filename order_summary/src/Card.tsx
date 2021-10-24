import React from "react";
import hero from "./images/illustration-hero.svg";
import music from "./images/icon-music.svg";

function Card() {
  return (
    <article className="card">
      <img src={hero} alt="Woman listening to music" />
      <div className="card-content">
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like.
        </p>
        <div className="annual-plan">
          <img src={music} width="50px" height="50px" alt="music plan" />
          <div className="annual-plan-content">
            <p>Annual Plan</p>
            <p>$59.99/year</p>
          </div>
          <a className="annual-plan-change" href="./">
            Change
          </a>
        </div>
        <button className="proceed-button">Proceed to Payment</button>
        <button className="cancel-order-button">Cancel Order</button>
      </div>
    </article>
  );
}

export default Card;
