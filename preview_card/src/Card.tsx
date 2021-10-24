import React from "react";
import logo from "./images/image-header-desktop.jpg";

const accolades = [
  { name: "Companies", text: "10k+" },
  { name: "Templates", text: "314" },
  { name: "Queries", text: "12M+" },
];

function Card() {
  return (
    <ul>
      <li className="card-container">
        <div className="img-container">
          <img src={logo} alt="Women at a meeting" />
          <div className="overlay" />
        </div>
        <section className="card-content">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul className="accolades">
            {accolades.map((accolade) => (
              <li key={accolade.name} className="accolade">
                <p className="accolade-text">{accolade.text}</p>
                <p className="accolade-name">{accolade.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </li>
    </ul>
  );
}

export default Card;
