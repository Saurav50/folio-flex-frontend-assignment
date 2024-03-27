import React, { useEffect } from "react";

const PortfolioSection = () => {
  // useEffect to set "all" as the default filter when the component mounts
  useEffect(() => {
    filterSelection("all");
  }, []);
  return (
    <section
      className="w-100 float-left portfolio-con padding-top"
      id="Portfolio"
    >
      <div className="container">
        <div className="generic-title text-center">
          <h6 className="text-white">Creative Works</h6>
          <h2 className="mb-0 text-white">Check My Portfolio</h2>
        </div>
        <div id="myBtnContainer" className="text-center">
          <button
            className="active active_button"
            onClick={() => filterSelection("all")}
          >
            All
          </button>
          <button className="btn" onClick={() => filterSelection("Mern")}>
            Mern
          </button>
          <button className="btn" onClick={() => filterSelection("Reactjs")}>
            React.Js
          </button>
          <button className="btn" onClick={() => filterSelection("Nextjs")}>
            Next.js
          </button>
          <button className="btn" onClick={() => filterSelection("Css")}>
            Css
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
