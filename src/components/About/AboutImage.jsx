import React from "react";

const AboutImage = ({ userData }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      {userData && userData.about && userData.about.avatar && (
        <img src={userData.about.avatar.url} alt="User" className="about-img" />
      )}
      <h5 className="image-name">
        {userData && userData.about ? userData.about.name : ""}
      </h5>
    </div>
  );
};

export default AboutImage;
