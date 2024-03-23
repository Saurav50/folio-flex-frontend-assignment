// EducationSection.js
import React, { useState, useEffect } from "react";
import EducationExperienceItem from "./EducationExperienceItem";

const EducationSection = () => {
  const [educationData, setEducationData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch education data");
        }
        return response.json();
      })
      .then((data) => {
        const sortedData = data.user.timeline.sort(
          (a, b) => a.sequence - b.sequence
        );
        setEducationData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching education data:", error);
        setError(error);
      });
  }, []);

  return (
    <section
      className="w-100 float-left blog-con padding-top padding-bottom position-relative"
      id="Experience"
    >
      <div className="container">
        <div className="blog-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>Explore</h6>
            <h2 className="mb-0">Education</h2>
          </div>
          {error ? (
            <p>Error fetching education data. Please try again later.</p>
          ) : (
            <div className="blog-box wow fadeInUp">
              <div className="row">
                {educationData &&
                  educationData
                    .filter((item) => item.enabled && item.forEducation)
                    .map((item) => (
                      <EducationExperienceItem
                        key={item.id}
                        company_name={item.company_name}
                        endDate={item.endDate}
                        jobTitle={item.jobTitle}
                        jobLocation={item.jobLocation}
                        summary={item.summary}
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container experience-con">
        <div className="blog-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>Explore</h6>
            <h2 className="mb-0">Experience</h2>
          </div>
          {error ? (
            <p>Error fetching Experience data. Please try again later.</p>
          ) : (
            <div className="blog-box wow fadeInUp">
              <div className="row">
                {educationData &&
                  educationData
                    .filter((item) => item.enabled && !item.forEducation)
                    .map((item) => (
                      <EducationExperienceItem
                        key={item.id}
                        company_name={item.company_name}
                        endDate={item.endDate}
                        jobTitle={item.jobTitle}
                        jobLocation={item.jobLocation}
                        summary={item.summary}
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
