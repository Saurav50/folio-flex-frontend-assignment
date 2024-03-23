const SkillItem = ({ title, percentage }) => {
  let circleColor = "";
  if (percentage > 90) {
    circleColor = "circle-wrap firstPercentage";
  } else if (percentage >= 80) {
    circleColor = "circle-wrap secondPercentage";
  } else if (percentage >= 70) {
    circleColor = "circle-wrap thirdPercentage";
  } else {
    circleColor = "circle-wrap fourthPercentage";
  }

  return (
    <div className="skill-left-item-con">
      <div className={circleColor} style={{ "--percentage": `${percentage}` }}>
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle">
            <div className="service-skill-sttaf-item-con">
              <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                <h4 className="d-table-cell align-middle mb-0 text-center count ">
                  {percentage}
                </h4>
                <span className="">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-skill-sttaf-item-heading">
        <p className="mb-0">{title}</p>
      </div>
    </div>
  );
};

export default SkillItem;
