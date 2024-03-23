const ServiceModal = (props) => {
  return (
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
        <div className="modal-body service-model-content">
          <figure className="mb-0">
            <img
              src={props.image}
              alt="portfolio-model-img2"
              className="img-fluid"
            />
          </figure>
          <h4>{props.title}</h4>
          <p className="mb-md-4 mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release .
          </p>
          <ul className="list-unstyled model-list mb-md-3 mb-2">
            <li>
              <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
              dummy text of the printing and typesetting industry
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
              dummy text of the printing and typesetting industry
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
              dummy text of the printing and typesetting industry
            </li>
          </ul>
          <p className="mb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceModal;
