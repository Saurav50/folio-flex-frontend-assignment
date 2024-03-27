import React, { useEffect, useState } from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
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

  return (
    <section
      className="w-100 float-left about-con padding-top padding-bottom position-relative"
      id="about-con"
    >
      <div className="container">
        <div className="about-inner-con position-relative">
          <div className="generic-title text-center">
            <h2 className="mb-0">About Me</h2>
          </div>
          <div className="about-row">
            <AboutImage userData={userData} className="about-image-con" />
            <AboutContent userData={userData} className="about-content-con" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
