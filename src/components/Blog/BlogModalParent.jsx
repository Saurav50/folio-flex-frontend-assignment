// Parent component
import BlogModal from "./BlogModal";
// import bgImg1 from "../../assets/image/blog-model-img1.png";
// import bgImg2 from "../../assets/image/blog-model-img2.png";
// import bgImg3 from "../../assets/image/blog-model-img3.png";
import { useEffect, useState } from "react";
const BlogModalParent = () => {
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
        userData.projects.map((blog) => (
          <BlogModal
            key={blog._id}
            id={`blogModal-${blog._id}`}
            author="John Doe"
            // date={blog.date}
            title={blog.title}
            content={blog.description}
            imageSrc={blog.image.url}
          />
        ))}
    </>
  );
};

export default BlogModalParent;
