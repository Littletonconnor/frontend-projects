import React from "react";
import iconSedan from "./images/icon-sedans.svg";
import iconSuvs from "./images/icon-suvs.svg";
import iconLuxury from "./images/icon-luxury.svg";

function Cards() {
  return (
    <div className="cards-container">
      <article className="card-1">
        <div className="card-container">
          <img src={iconSedan} alt="A sedan" />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <div className="spacer" />
          <button>Learn More</button>
        </div>
      </article>
      <article className="card-2">
        <div className="card-container">
          <img src={iconSuvs} alt="A sedan" />
          <h1>Suvs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <div className="spacer" />
          <button>Learn More</button>
        </div>
      </article>
      <article className="card-3">
        <div className="card-container">
          <img src={iconLuxury} alt="A sedan" />
          <h1>Luxury</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <div className="spacer" />
          <button>Learn More</button>
        </div>
      </article>
    </div>
  );
}

export default Cards;
