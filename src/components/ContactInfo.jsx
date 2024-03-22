// ContactInfo.js
import React, { useEffect, useState } from "react";
import locationIcon from "../assets/image/location-icon.png";
import messageIcon from "../assets/image/message-icon.png";
import phoneIcon from "../assets/image/phone-icon.png";

const ContactInfo = () => {
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
    <div className="col-lg-4 order-lg-0 order-2">
      <div className="contact-information position-relative wow slideInLeft">
        <ul className="list-unstyled">
          <li>
            <figure className="mb-0 d-flex align-items-center justify-content-center">
              <img
                src={locationIcon}
                alt="location-icon"
                className="img-fluid"
              />
            </figure>
            <div className="contact-information-content">
              <h5>Address:</h5>
              <p className="mb-0">
                {userData
                  ? userData.about.address
                  : "121 King Street Melbourne, 3000, Australia"}
              </p>
            </div>
          </li>
          <li>
            <figure className="mb-0 d-flex align-items-center justify-content-center">
              <img src={messageIcon} alt="message-icon" className="img-fluid" />
            </figure>
            <div className="contact-information-content">
              <h5>Email:</h5>
              <p className="mb-0">
                {userData ? userData.email : "Info@folioflix.com"}
              </p>
              <p className="mb-0">folioflix@gmail.com</p>
            </div>
          </li>
          <li className="mb-0">
            <figure className="mb-0 d-flex align-items-center justify-content-center">
              <img src={phoneIcon} alt="phone-icon" className="img-fluid" />
            </figure>
            <div className="contact-information-content">
              <h5>Phone:</h5>
              <p className="mb-0">
                {userData ? userData.about.phoneNumber : "+61 3 8376 6284"}
              </p>
              <p className="mb-0">+800 2345 6789</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
