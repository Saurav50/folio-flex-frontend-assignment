import React from "react";
import comma from "../assets/image/comma-icon.png";

const TestimonialItem = ({ active, content, author, position }) => {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <div className="testimonials-content">
        <h6>Testimonials</h6>
        <h2>Happy Clients Feedback</h2>
        <figure className="mb-0">
          <img src={comma} alt="comma-icon" className="img-fluid" />
        </figure>
        <div className="testimonials-inner-content">
          <p>{content}</p>
          <span className="d-block auther-name">{author}</span>
          <span className="d-block">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
