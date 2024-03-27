import React, { useState, useEffect } from "react";
import bannerRightImg from "../../assets/image/banner-right-img.png"; // Import the banner right image
import cupImg from "../../assets/image/cup-img.png"; // Import the cup image
import adminIcon from "../../assets/image/admin-icon.png"; // Import the admin icon image

const Banner = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
        console.log(data.user);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    const cursor = document.getElementsByClassName("cursor")[0];
    const cursorinner = document.getElementsByClassName("cursor2")[0];
    const bannerRightCon = document.getElementById("banner-right-con");

    if (!bannerRightCon) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.visibility = "visible";
      cursorinner.style.visibility = "visible";
      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    };

    const handleMouseOver = () => {
      cursor.style.visibility = "visible";
      cursorinner.style.visibility = "visible";
    };

    const handleMouseOut = () => {
      cursor.style.visibility = "hidden";
      cursorinner.style.visibility = "hidden";
    };

    bannerRightCon.addEventListener("mousemove", handleMouseMove);
    bannerRightCon.addEventListener("mouseover", handleMouseOver);
    bannerRightCon.addEventListener("mouseout", handleMouseOut);

    return () => {
      bannerRightCon.removeEventListener("mousemove", handleMouseMove);
      bannerRightCon.removeEventListener("mouseover", handleMouseOver);
      bannerRightCon.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <section className="banner-main-con" id="home">
      <div className="container pl-0 pr-0">
        <div className="footer-social-icon banner-social-icon mb-0">
          <ul className="mb-0 list-unstyled">
            {userData &&
              userData.social_handles &&
              userData.social_handles.map(
                (socialHandle, index) =>
                  socialHandle.enabled && ( // Only render if enabled is true
                    <li key={index}>
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

        <div className="banner-con text-lg-left text-center">
          <div className="row">
            <div className="col-lg-7 col-sm-12  d-flex justify-content-center   flex-column">
              <div className="banner-left-con wow slideInLeft">
                <div className="banner-heading">
                  <h2>Hello, I Am</h2>

                  <h1>{userData ? userData.about.name : "John Doe"},</h1>

                  <h4>
                    {userData
                      ? userData.about.subTitle
                      : "Duis aute irure dolor in reprehenderit in voluptareudolore eu fugiat nulla pariatur."}
                  </h4>
                </div>
                <div className="banner-btn generic-btn d-inline-block">
                  <a href="#Contact">Hire Me</a>
                </div>
                <a href="#Portfolio" className="See-btn">
                  See My Work
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div
                className="banner-right-con position-relative wow slideInRight"
                id="banner-right-con"
              >
                <figure className="mb-0 ">
                  <img
                    src={bannerRightImg}
                    alt="banner-right-img"
                    id="banner-right-img"
                    className="banner-right-img"
                  />
                </figure>
                <div
                  className="best-award-con d-inline-block wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="best-award-inner-con">
                    <figure className="mb-0">
                      <img src={cupImg} alt="cup-img" className="img-fluid" />
                    </figure>
                    <div className="best-award-title">
                      <p className="mb-0">
                        Best Design
                        <br />
                        Award.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="best-award-con d-inline-block happy-con wow bounceInUp "
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="best-award-inner-con text-center">
                    <figure>
                      <img
                        src={adminIcon}
                        alt="admin-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="best-award-title d-inline-block ml-0">
                      <p className="mb-0 d-inline-block count">4</p>
                      <p className="mb-0 d-inline-block">k+</p>
                      <span className="d-block">
                        Happy
                        <br />
                        Customers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cursor" />
                <div className="cursor2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
