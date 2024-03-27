import React from "react";
// import "./AboutContent.css"; // Import the CSS file

const AboutContent = ({ userData }) => {
  return (
    <div className="about-content-container">
      {userData && userData.about && (
        <div className="con-inner">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 57 57"
              width="25px"
              height="25px"
              fill="#000000"
            >
              <rect x="0" y="0" width="57" height="57" fill="#fff" />
              <g>
                <circle cx="18.5" cy="31.5" r="5.5" fill="#6F34FE" />
                <path d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z" />
              </g>
              <g>
                <circle cx="35.5" cy="31.5" r="5.5" fill="#6F34FE" />
                <path d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z" />
              </g>
              <path
                d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
                fill="#6F34FE"
              />
              <path
                d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
                fill="#6F34FE"
              />
            </svg>
            {userData.about.quote}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 57 57"
              width="25px"
              height="25px"
              fill="#000000"
              transform="rotate(180)"
            >
              <rect x="0" y="0" width="57" height="57" fill="#fff" />
              <g>
                <circle cx="18.5" cy="31.5" r="5.5" fill="#6F34FE" />
                <path d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z" />
              </g>
              <g>
                <circle cx="35.5" cy="31.5" r="5.5" fill="#6F34FE" />
                <path d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z" />
              </g>
              <path
                d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
                fill="#6F34FE"
              />
              <path
                d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
                fill="#6F34FE"
              />
            </svg>
          </h2>
          <h3>
            {userData.about.title} with {userData.about.exp_year} years of
            experience
          </h3>

          <p>{userData.about.description}</p>
          <div className="contact-info">
            <p className="text">If you'd like to reach out to me:</p>

            <p>Phone: {userData.about.phoneNumber}</p>
          </div>

          {/* <p>{userData.about.exp_year} years of experience</p> */}
        </div>
      )}
    </div>
  );
};

export default AboutContent;
