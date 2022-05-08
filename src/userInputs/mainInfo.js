import { useState } from "react";
let mainData;
function MainInfo() {
  const [mainDetails, handleMainDetails] = useState({ gender: "Female" });
  const getDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleMainDetails({ ...mainDetails, [name]: value });
    mainData = mainDetails;
  };
  return (
    <>
      <div className="clearfix"></div>
      <div className="section detail-desc">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic js">
              <div className="box">
                <input id="upload-pic" className="inputfile" />
                <label htmlFor="upload-pic">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          <div className="row bottom-mrg">
            <div className="add-feild">
              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="FirstName"
                    onChange={getDetails}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="LastName"
                    onChange={getDetails}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    onChange={getDetails}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <select
                    className="form-control input-lg"
                    name="gender"
                    onChange={getDetails}
                  >
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <textarea
                  className="form-control"
                  placeholder="Objective"
                  name="objective"
                  onChange={getDetails}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
export { mainData, MainInfo };
