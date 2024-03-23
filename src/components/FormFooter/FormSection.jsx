// FormSection.js
import React from "react";
import ContactInfo from "../Contact/ContactInfo";
import ContactForm from "../Contact/ContactForm";

const FormSection = () => {
  return (
    <section
      className="w-100 float-left form-main-con padding-top padding-bottom"
      id="Contact"
    >
      <div className="container">
        <div className="form-main-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>Get in Touch</h6>
            <h2 className="mb-0">
              Any Questions? Feel Free
              <br />
              to Contact
            </h2>
          </div>
          <div className="row">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
