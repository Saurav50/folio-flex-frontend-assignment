import React, { useEffect } from "react";

const ServiceBoxItem = ({
  iconSrc,
  title,
  description,
  price,
  modalTarget,
}) => {
  useEffect(() => {
    const cursor = document.getElementsByClassName("cursor")[0];
    const cursorinner = document.getElementsByClassName("cursor2")[0];

    const handleMouseMove = (e) => {
      cursor.style.visibility = "visible";
      cursorinner.style.visibility = "visible";
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorinner.style.left = e.clientX + "px";
      cursorinner.style.top = e.clientY + "px";
    };

    const handleMouseOver = (item) => {
      item.style.transform = "rotate(-1deg)";
    };

    const handleMouseOut = (item) => {
      cursor.style.visibility = "hidden";
      cursorinner.style.visibility = "hidden";
      item.style.transform = "rotate(0deg)";
    };

    const items = document.querySelectorAll(".service-box-item");
    if (items) {
      items.forEach((item) => {
        item.addEventListener("mousemove", handleMouseMove);
        item.addEventListener("mouseover", () => handleMouseOver(item));
        item.addEventListener("mouseout", () => handleMouseOut(item));

        item.addEventListener("mouseleave", () => {
          cursor.style.visibility = "hidden";
          cursorinner.style.visibility = "hidden";
          item.style.transform = "rotate(0deg)";
        });
      });

      return () => {
        items.forEach((item) => {
          item.removeEventListener("mousemove", handleMouseMove);
          item.removeEventListener("mouseover", () => handleMouseOver(item));
          item.removeEventListener("mouseout", () => handleMouseOut(item));
          item.removeEventListener("mouseleave", () => {
            cursor.style.visibility = "hidden";
            cursorinner.style.visibility = "hidden";
            item.style.transform = "rotate(0deg)";
          });
        });
      };
    }
  }, []);

  return (
    <div className="col-lg-6 col-md-6">
      <div className="service-box-item">
        <figure className="mb-0">
          <img src={iconSrc} alt="service-icon" className="img-fluid" />
        </figure>
        <div className="service-box-item-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{price}</p>
          <a href="#" data-toggle="modal" data-target={modalTarget}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoxItem;
