// BlogSection.js
import { useEffect, useState } from "react";
import React from "react";
import BlogItem from "./BlogItem";

const BlogSection = () => {
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
    if (techStacks.includes("css") || techStacks.includes("tailwindcss")) {
      categories.push("Css");
    }

    return categories.length > 0 ? categories.join(" ") : "Other";
  };
  useEffect(() => {
    filterSelectionBlog("all");
  }, []);

  return (
    <section
      className="w-100 float-left blog-con padding-top padding-bottom position-relative"
      id="blog"
    >
      <div className="container">
        <div className="blog-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>Latest News</h6>
            <h2 className="mb-0">Blog & Articles</h2>
          </div>
          <div id="myBtnContainer" className="text-center blog-btn  ">
            <button
              className="active active_button"
              onClick={() => filterSelectionBlog("all")}
            >
              All
            </button>
            <button className="btn" onClick={() => filterSelectionBlog("Mern")}>
              Mern
            </button>
            <button
              className="btn"
              onClick={() => filterSelectionBlog("Reactjs")}
            >
              React.Js
            </button>
            <button
              className="btn"
              onClick={() => filterSelectionBlog("Nextjs")}
            >
              Next.js
            </button>
            <button className="btn" onClick={() => filterSelectionBlog("Css")}>
              Css
            </button>
          </div>
          <div className="blog-box wow fadeInUp">
            <div className="row">
              {userData &&
                userData.projects
                  .filter((project) => project.enabled)
                  .sort((a, b) => a.sequence - b.sequence) // Filter out projects where enabled is false
                  .map((project, index) => (
                    <BlogItem
                      key={index}
                      imgSrc={project.image.url}
                      author="John Doe"
                      title={project.title}
                      content={project.description}
                      modalTarget={`#blogModal-${project._id}`}
                      categories={getCategories(project)}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
