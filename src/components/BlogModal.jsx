const BlogModal = ({ id, author, date, title, content, imageSrc }) => {
  return (
    <div
      id={id}
      className="modal fade blog-model-con"
      tabIndex="-1"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="far fa-times"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="blog-box-item mb-0">
              <div className="blog-img">
                <figure className="mb-0">
                  <img src={imageSrc} alt="blog-img" className="img-fluid" />
                </figure>
              </div>
              <div className="blog-content pl-0 pr-0">
                <div className="blog-auteher-title">
                  <span>By {author}</span>
                  <span className="float-lg-right">{date}</span>
                </div>
                <h4>{title}</h4>
                <div className="footer-social-icon mb-0">
                  <ul>
                    <li className="d-inline-block">
                      <a href="https://www.behance.net/">
                        <i className="fab fa-behance d-flex align-items-center justify-content-center"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="https://dribbble.com/">
                        <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="mb-md-4 mb-2">{content}</p>
                <h4 className="comment-title">LEAVE A COMMENT</h4>
                <form className="contact-form blog-model-form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input type="text" placeholder="Name" name="name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input type="email" placeholder="Email" />
                        <small className="form-text text-muted"></small>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input type="tel" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input type="text" placeholder="Subject" />
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
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="appointment-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
