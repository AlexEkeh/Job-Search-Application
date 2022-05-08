function renderDisplay(params) {
  const apply = (e) => {
    e.preventDefault();
    const item = e.target;
    item.textContent = "Applied";
  };
  return params.map((company, i) => {
    const {
      type,
      title,
      experience,
      companyName,
      location,
      salary,
      email,
      description,
    } = company;

    const image = `assets/img/${companyName}.jpg`;
    const id = "apply-job" + i;
    return (
      <div key={"key" + i}>
        <div
          className="modal fade"
          id={id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="apply-job-box">
                  <img src={image} className="img-responsive" alt="" />
                  <h4>{title}</h4>
                  <h5>{companyName}</h5>
                  <p>{email}</p>
                  <br />
                  <h4 className="">Job Description</h4>
                  <p className="modalContent">{description}</p>
                </div>
                <div className="apply-job-form">
                  <form className="form-inline">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <div className="center">
                          <button
                            onClick={apply}
                            type="button"
                            id="subscribe"
                            className="submit-btn"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div key={companyName + i} className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src={image} className="img-responsive" alt="" />
            </div>
            <div data-toggle="modal" data-target={"#" + id}>
              <div className="brows-job-position">
                <h3>{title}</h3>
                <p>
                  <span>{companyName}</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">
                  {experience} years of experience
                </span>
              </div>
              <div className="brows-job-type">
                <span className="part-time">{type}</span>
              </div>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>
                    {location}
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money"></i>${salary}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
}
export default renderDisplay;
