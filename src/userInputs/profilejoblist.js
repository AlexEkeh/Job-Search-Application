const listApplied = (props) => {
  return props.map((e) => (
    <>
      <div class="col-md-12 col-sm-12">
        <div class="item-click">
          <article>
            <div class="brows-job-list">
              <div class="col-md-1 col-sm-2 small-padding">
                <div class="brows-job-company-img">
                  <a href="job-detail.html">
                    <img
                      src="assets/img/com-3.jpg"
                      class="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-sm-5">
                <div class="brows-job-position">
                  <a href="job-apply-detail.html">
                    <h3>{e.title}</h3>
                  </a>
                  <p>
                    <span>{e.companyName}</span>
                    <span class="brows-job-sallery">
                      <i class="fa fa-money"></i>${e.salary}
                    </span>
                    <span class="job-type bg-trans-primary cl-primary">
                      {e.type}
                    </span>
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-sm-3">
                <div class="brows-job-location">
                  <p>
                    <i class="fa fa-map-marker"></i>
                    {e.location}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  ));
};
export default listApplied;
