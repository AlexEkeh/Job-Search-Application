import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";
import axios from "axios";
function CreateJob() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [jobInfo, handleJobInfo] = useState({});
  const getInfo = (e) => {
    const { name, value } = e.target;
    handleJobInfo({ ...jobInfo, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (user) {
      const { token } = JSON.parse(user);
      const response = await axios.post("jobs/postjob", jobInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        navigate("/profile");
      }
    }
  };
  return (
    <Wrapper>
      <div className="clearfix"></div>
      <section className="inner-header-title blankX">
        <h1>Create Job</h1>
      </section>
      <div className="clearfix"></div>
      <section className="full-detail">
        <form onSubmit={submitForm}>
          <div className="container">
            <div className="row bottom-mrg extra-mrg">
              <h2 className="detail-title">Job Details</h2>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-tag"></i>
                  </span>
                  <input
                    required
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Job title"
                    onChange={getInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-money"></i>
                  </span>
                  <input
                    required
                    name="salary"
                    type="number"
                    step={100}
                    min={100}
                    className="form-control"
                    placeholder="Salary"
                    onChange={getInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-list"></i>
                  </span>
                  <select
                    required
                    name="category"
                    className="form-control"
                    onChange={getInfo}
                  >
                    <option>Select Category</option>
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Manufacturing</option>
                    <option>Marketing</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-list-alt"></i>
                  </span>
                  <select
                    required
                    name="type"
                    className="form-control"
                    onChange={getInfo}
                  >
                    <option>Job Type</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Freelancer</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-briefcase"></i>
                  </span>
                  <input
                    required
                    name="experience"
                    type="number"
                    min={0}
                    className="form-control"
                    placeholder="Year of experience"
                    onChange={getInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-flag"></i>
                  </span>
                  <input
                    required
                    name="companyName"
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    onChange={getInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <input
                    required
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Company Email"
                    onChange={getInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <select
                    required
                    name="location"
                    className="form-control"
                    onChange={getInfo}
                  >
                    <option>Location</option>
                    <option>Lagos</option>
                    <option>Edo</option>
                    <option>Abuja</option>
                    <option>Rivers</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-globe"></i>
                  </span>
                  <input
                    required
                    name="website"
                    type="text"
                    className="form-control"
                    placeholder="Website"
                    onChange={getInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-clock-o"></i>
                  </span>
                  <input
                    required
                    name="closeDate"
                    type="text"
                    placeholder="Close Date (mm/dd/yyyy)"
                    className="form-control"
                    onChange={getInfo}
                  />
                </div>
              </div>
            </div>

            <div className="row bottom-mrg extra-mrg">
              <h2 className="detail-title">Job Description/Requirement</h2>
              <div className="col-md-12 col-sm-12">
                <textarea
                  required
                  name="description"
                  className="form-control textarea"
                  placeholder="Description and Requirement"
                  onChange={getInfo}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <button type="submit" className="btn btn-success small-btnX">
              Post Job
            </button>
          </div>
        </form>
      </section>
      <div className="clearfix"></div>
    </Wrapper>
  );
}
export default CreateJob;
