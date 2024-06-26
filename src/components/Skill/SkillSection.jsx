import React, { useState, useEffect } from "react";
import SkillItem from "./SkillItem";

const SkillSection = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        // Sort the skills array by the sequence field
        const sortedSkills = data.user.skills.sort(
          (a, b) => a.sequence - b.sequence
        );
        setUserData({ ...data.user, skills: sortedSkills });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section
      className="w-100 float-left skill-con padding-top padding-bottom position-relative"
      id="about-con"
    >
      <div className="container">
        <div className="skill-inner-con position-relative">
          <div className="col">
            <div className="col-lg-12 d-flex align-items-center text-center">
              {/* <div className=" generic-title wow slideInRight">
               
              </div> */}
              <div className="generic-title col-lg-12 text-center align-items-center">
                <h6>My Skills</h6>
                <h2 className="mb-0">
                  <h2>
                    Beautiful & <br />
                    Unique Digital Experiences
                  </h2>
                </h2>
              </div>
            </div>
            <div className="col-lg-12 order-lg-0 order-2 skills-flex">
              <div className="skill-left-con text-center wow slideInLeft">
                <div className="row service-skill-sttaf-con">
                  {userData &&
                    userData.skills &&
                    userData.skills
                      .filter((skill) => skill.enabled)
                      .map((skill) => (
                        <div
                          className="col-lg-3 col-md-3 col-sm-4 col-6 mb-2 "
                          key={skill.name}
                        >
                          <SkillItem
                            title={skill.name}
                            percentage={skill.percentage}
                          />
                        </div>
                      ))}
                </div>
              </div>
            </div>
            <div className="cv-download">
              <p>
                Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
                aliquid exrea commodi consequatur magni dolores aos qui ratione
                voluptatem nesciunt.
              </p>
              <p>
                Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
                consequntar magni dolores.
              </p>
              <div className="generic-btn download-bnt">
                <a href="#" id="downloadImg" onClick={() => downloadImage()}>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
