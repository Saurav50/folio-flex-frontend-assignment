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

  const getCategories = (project) => {
    const techStacks = project.techStack.map((stack) =>
      stack.toLowerCase().trim()
    );
    console.log(techStacks);
    const categories = [];

    if (techStacks.includes("reactjs")) {
      categories.push("Reactjs");
    }
    if (techStacks.includes("nextjs")) {
      categories.push("Nextjs");
    }
    if (techStacks.includes("mern")) {
      categories.push("Mern");
    }
    if (techStacks.includes("css")) {
      categories.push("Css");
    }

    return categories.length > 0 ? categories.join(" ") : "Other";
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
                  categories={getCategories(project)}
                  github={project.githuburl}
                  liveurl={project.liveurl}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBody;
