import { Link } from "react-router-dom";
import Wrapper from "../wrapper";
const Profile = () => {
  const state = JSON.parse(localStorage.getItem("user"));
  const bText = state.role === "Applicant" ? "Search Job" : "Post Job";
  const bLink = state.role === "Applicant" ? "/" : "/createjob";
  const hText =
    state.role === "Applicant" ? "Applicant Profile" : "Recruiter Profile";
  return (
    <Wrapper>
      <div className="clearfix"></div>

      <section className="inner-header-title profile-header-title profile-hight">
        <div className="container">
          <h1>{hText}</h1>
        </div>
      </section>
      <div className="clearfix"></div>
      <section className="detail-desc advance-detail-pr gray-bg">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic">
              <img src="assets/img/sample.png" className="img" alt="" />
              <div className="detail-edit" title="edit">
                <i className="fa fa-pencil"></i>
              </div>
            </div>
            <div className="detail-status">
              <span>{state.role}</span>
            </div>
          </div>

          <div className="row bottom-mrg">
            <div className="col-md-12 col-sm-12">
              <div className="advance-detail detail-desc-caption">
                <h4>{state.name}</h4>
                <span className="designation">{state.email}</span>
              </div>
            </div>
          </div>

          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="col-md-12 col-sm-12">
                <div className="detail-pannel-footer-btn pull-right">
                  <Link to={bLink} className="footer-btn blu-btn" title="">
                    {bText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="full-detail-description full-detail gray-bg"></section>
      <section className="full-detail-description full-detail gray-bg"></section>
    </Wrapper>
  );
};
export default Profile;
