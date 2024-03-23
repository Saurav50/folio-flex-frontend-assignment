// EducationItem.js
import React from "react";
import "./EducationItem.css";

const EducationItem = ({
  company_name,
  endDate,
  jobTitle,
  jobLocation,
  summary,
}) => {
  // Function to format date into a human-readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="col-lg-4">
      <div className="education-item">
        <div className="education-item-img">
          <span className="company-name">Company: {company_name}</span>
        </div>
        <div className="education-item-content">
          <h4>{jobTitle}</h4>
          <p>
            {summary
              ? summary
              : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sed reiciendis necessitatibus reprehenderit "}
          </p>
          <p className="location">{jobLocation}</p>
          <div className="education-item-details">
            <span className="end-date float-right">
              End Date: {formatDate(endDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
