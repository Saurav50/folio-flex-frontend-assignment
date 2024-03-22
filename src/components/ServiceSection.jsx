import React, { useState, useEffect } from "react";
import ServiceBox from "./ServiceBox";
import ServiceBoxItem from "./ServiceBoxItem";
const ServiceSection = () => {
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
    <section
      className="w-100 float-left service-con padding-top padding-bottom position-relative"
      id="service-con"
    >
      <div className="container">
        <div className="service-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>My Expertise</h6>
            <h2 className="mb-0">
              Provide Wide Range of
              <br />
              Digital Services
            </h2>
          </div>
          <ServiceBox>
            <div className="row">
              {userData &&
                userData.services &&
                userData.services.map((service, index) => (
                  <ServiceBoxItem
                    key={index}
                    iconSrc={service.image.url}
                    title={service.name}
                    description={service.desc}
                    price={service.charge}
                    modalTarget={`#${service._id}`}
                  />
                ))}
            </div>
          </ServiceBox>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
