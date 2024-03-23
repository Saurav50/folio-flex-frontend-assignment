// BlogSection.js
import React from "react";
import BlogItem from "./BlogItem";

const BlogSection = () => {
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
          <div className="blog-box wow fadeInUp">
            <div className="row">
              <BlogItem
                author="David William"
                date="Mar 8, 2022"
                title="Quis autem vea eum iure reprehenderit"
                content="Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam."
                modalTarget="#blog-model-1"
              />
              <BlogItem
                author="John Doe"
                date="Mar 9, 2022"
                title="Reprehenderit in vouta velit esse cillum"
                content="Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam."
                modalTarget="#blog-model-2"
              />
              <BlogItem
                author="Elina Parker"
                date="Mar 10, 2022"
                title="Soluta nobis ose aligen optio cumue"
                content="Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam."
                modalTarget="#blog-model-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
