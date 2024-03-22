// ContactForm.js
import React from "react";

const ContactForm = () => {
  return (
    <div className="col-lg-8">
      <div id="form_result"></div>
      <form
        id="contactpage"
        method="POST"
        className="contact-form wow slideInRight text-lg-left text-center"
      >
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-0">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-0">
              <input
                type="email"
                id="emailHelp"
                name="emailHelp"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <small className="form-text text-muted"></small>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-0">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                id="phone"
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-0">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                id="subject"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group mb-0">
              <textarea
                placeholder="Message"
                rows="3"
                name="comments"
                id="comments"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" id="submit" className="appointment-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
