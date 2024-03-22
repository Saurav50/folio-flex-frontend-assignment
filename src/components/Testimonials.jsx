import React, { useState, useEffect } from "react";
import TestimonialItem from "./TestimonialItem";

// Import images
import tastimonialsImg from "../assets/image/tastimonials-img.png";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.user.testimonials);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section
      className="w-100 float-left padding-top padding-bottom tastimonials-con position-relative text-lg-left text-center"
      id="testimonials"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="tastimonials-left-con wow slideInLeft  ">
              <figure className="mb-0">
                <img
                  src={
                    testimonials[0]
                      ? testimonials[0].image.url
                      : tastimonialsImg
                  }
                  alt="tastimonials-img"
                  className=" testimonial-image img-fluid "
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              id="carouselExampleControls"
              className="carousel slide wow slideInRight"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {testimonials &&
                  testimonials.map((testimonial, index) => (
                    <TestimonialItem
                      key={index}
                      active={index === 0} // Set the first testimonial as active
                      content={testimonial.review}
                      author={testimonial.name}
                      position={testimonial.position}
                    />
                  ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <i className="fas fa-arrow-left d-flex align-items-center justify-content-center"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
