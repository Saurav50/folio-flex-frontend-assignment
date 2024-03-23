import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";

// // Import images
// import portfolioImg1 from "../..assets/image/portfolio-img1.png";
// import portfolioImg2 from "../../assets/image/portfolio-img2.png";
// import portfolioImg3 from "../../assets/image/portfolio-img3.png";
// import portfolioImg4 from "../../assets/image/portfolio-img4.png";
// import portfolioImg5 from "../../assets/image/portfolio-img5.png";

const PortfolioBody = () => {
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
  const getCategories = (index) => {
    if (index >= 0 && index < 5) {
      return "cars";
    } else if (index >= 5 && index < 10) {
      return "colors";
    } else {
      return "fruits animals"; // Default categories if index is out of range
    }
  };

  return (
    <section className="w-100 float-left portfolio-body-con">
      <div className="container">
        <div className="portfolio-img-con position-relative w-100 float-left wow fadeInUp">
          {userData &&
            userData.projects
              .filter((project) => project.enabled)
              .sort((a, b) => a.sequence - b.sequence) // Filter out projects where enabled is false
              .map((project, index) => (
                <PortfolioItem
                  key={index}
                  imgSrc={project.image.url}
                  title={project.title}
                  description={project.description}
                  modalTarget={project._id}
                  categories={getCategories(index)}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBody;
