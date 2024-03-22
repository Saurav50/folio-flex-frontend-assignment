import { useState, useEffect } from "react";
import Modal from "./Modal";
import ServiceModal from "./ServiceModal";
import portfolio1 from "../assets/image/portfolio-model-img1.jfif";
import portfolio2 from "../assets/image/portfolio-model-img2.jfif";
import portfolio3 from "../assets/image/portfolio-model-img3.jfif";
import portfolio4 from "../assets/image/portfolio-model-img4.jfif";
import portfolio5 from "../assets/image/portfolio-model-img5.jfif";
// import img1 from "../assets/image/ui-ux-model-img.jpg";
// import img2 from "../assets/image/web-designer-model-img.jpg";
// import img3 from "../assets/image/web-development-model-img.jpg";
// import img4 from "../assets/image/App-development-model-img.jpg";
import BlogModalParent from "./BlogModalParent";

const Modals = () => {
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
      {userData &&
        userData.projects
          .filter((project) => project.enabled)
          .sort((a, b) => a.sequence - b.sequence) // Filter out projects where enabled is false
          .map((project, index) => (
            <>
              <Modal
                key={index}
                image={project.image.url}
                title={project.title}
                description={project.description}
                github={project.githuburl}
                liveurl={project.liveurl}
                modalTarget={`${project._id}`}
              />
              <Modal
                key={index - 10}
                image={project.image.url}
                title={project.title}
                description={project.description}
                github={project.githuburl}
                liveurl={project.liveurl}
                modalTarget={`${project._id}-icon`}
              />
            </>
          ))}
      {userData &&
        userData.services &&
        userData.services.map((service, index) => (
          <div
            key={index}
            id={service._id}
            className="modal fade"
            tabIndex="-1"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <ServiceModal
              key={index}
              title={service.name}
              image={service.image.url}
            />
          </div>
        ))}
      <BlogModalParent />
    </>
  );
};

export default Modals;
