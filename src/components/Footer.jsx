// Footer.js
import { useEffect, useState } from "react";
import React from "react";
import footerLogo from "../assets/image/footer-logo.png";

const Footer = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div className="w-100 float-left weight-footer-con position-relative">
        <div className="container">
          <div className="weight-footer-content text-center wow fadeInUp">
            <figure className="">
              <img src={footerLogo} alt="footer-logo" className="img-fluid" />
            </figure>
            <div className="footer-navbar">
              <ul className="list-unstyled">
                <li className="d-inline-block border-left-0 pl-0">
                  <a href="#home">Home</a>
                </li>
                <li className="d-inline-block">
                  <a href="#about-con">About</a>
                </li>
                <li className="d-inline-block">
                  <a href="#service-con">Services</a>
                </li>
                <li className="d-inline-block">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li className="d-inline-block">
                  <a href="#testimonials">Blog</a>
                </li>
                <li className="d-inline-block pr-0">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footerLast-social-icon">
              <ul className="mb-0">
                {userData &&
                  userData.social_handles &&
                  userData.social_handles.map(
                    (socialHandle, index) =>
                      socialHandle.enabled && ( // Only render if enabled is true
                        <li key={index} className="d-inline-center">
                          <a href={socialHandle.url}>
                            <i
                              className={`fab fa-${socialHandle.platform.toLowerCase()} d-flex align-items-center justify-content-center`}
                            ></i>
                          </a>
                        </li>
                      )
                  )}
              </ul>
            </div>
          </div>
          <div className="copy-right-content text-center">
            <p className="mb-0">
              Copyright 2022 FolioFlix.com | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
