// BlogItem.js
import React from "react";
// import blog from "../../assets/image/blog-img-1.png";

const BlogItem = ({
  author,
  date,
  title,
  content,
  modalTarget,
  categories,
  imgSrc,
}) => {
  return (
    <div className={`filterDivBlog all show ${categories}`}>
      <div className="blog-box-item">
        <div className="blog-img">
          <a href="#" data-toggle="modal" data-target={modalTarget}>
            <figure className="mb-0">
              <img src={imgSrc} alt="blog-img" className="img-fluid" />
            </figure>
          </a>
        </div>
        <div className="blog-content">
          <div className="blog-auteher-title">
            <span>By {author}</span>
            <span className="float-lg-right">{date}</span>
          </div>
          <a href="#" data-toggle="modal" data-target={modalTarget}>
            <h4>{title}</h4>
          </a>
          <p className="content">{content}</p>
          <a href="#" data-toggle="modal" data-target={modalTarget}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
