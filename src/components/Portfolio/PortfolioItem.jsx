import React from "react";

const PortfolioItem = ({
  imgSrc,
  title,
  modalTarget,
  categories,
  github,
  liveurl,
}) => {
  return (
    <div className={`filterDiv ${categories} all position-relative show`}>
      <a href="#" data-toggle="modal" data-target={`#${modalTarget}`}>
        <div className="portfolio-img position-relative">
          <figure>
            <img src={imgSrc} alt="portfolio-img1" className="img-fluid" />
          </figure>
        </div>
      </a>
      <div className="portfolio-img-content text-left">
        <div className="portfolio-img-title d-inline-block">
          <h4>{title}</h4>
        </div>
        <h5 className="url-flex-portfolio">
          <a href={github}>Github</a>
          <a href={liveurl}>Live</a>
          <a
            href="#"
            className="float-lg-right"
            data-toggle="modal"
            data-target={`#${modalTarget}-icon`}
          >
            <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
          </a>
        </h5>
      </div>
    </div>
  );
};

export default PortfolioItem;
