import React from "react";
import ReactDOM from "react-dom";
import star from "./images/icon-star.svg";
import colton from "./images/image-colton.jpg";
import irene from "./images/image-irene.jpg";
import anne from "./images/image-anne.jpg";

import "./index.css";
import "./globals.css";

const testimonials = [
  {
    name: "Colton Smith",
    src: colton,
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    name: "Irene Roberts",
    src: irene,
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    name: "Anne Wallace",
    src: anne,
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>10,000+ of our users love our products.</h1>
      <p className="subtitle">
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our service.
      </p>
      <Review name="Reviews" />
      <Review name="Report Guru" />
      <Review name="BestTech" />
      <div style={{ marginBottom: 20 }} />
      {testimonials.map((testimonial) => (
        <Testimonial
          src={testimonial.src}
          name={testimonial.name}
          review={testimonial.review}
        />
      ))}
      <div style={{ paddingBottom: 20 }} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

interface ReviewProps {
  name: string;
}

function Review({ name }: ReviewProps) {
  return (
    <div className="review-card">
      <div className="flex gap">
        <img src={star} height="12px" width="12px" alt="a star" />
        <img src={star} height="12px" width="12px" alt="a star" />
        <img src={star} height="12px" width="12px" alt="a star" />
        <img src={star} height="12px" width="12px" alt="a star" />
        <img src={star} height="12px" width="12px" alt="a star" />
      </div>

      <p className="description">Rated 5 stars in {name}</p>
    </div>
  );
}

interface TestimonialProps {
  src: string;
  name: string;
  review: string;
}

function Testimonial({ src, name, review }: TestimonialProps) {
  return (
    <div className="testimonial-card">
      <div className="user">
        <img src={src} alt="user-profile" />
        <div className="user-details">
          <p className="username">{name}</p>
          <p className="job-title">Verified Buyer</p>
        </div>
      </div>
      <p className="review">{review}</p>
    </div>
  );
}
