import { useState } from "react";
let generalInfo;
function GenDetails(props) {
  const [GenInfo, handleGenInfo] = useState({ region: "Lagos" });
  const updateInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleGenInfo({ ...GenInfo, [name]: value });
    generalInfo = GenInfo;
  };
  return (
    <>
      <div className="container">
        <div className="row bottom-mrg extra-mrg">
          <h2 className="detail-title">General Information</h2>

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
                placeholder="Email Address"
                onChange={updateInfo}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-phone"></i>
              </span>
              <input
                required
                name="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                onChange={updateInfo}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-globe"></i>
              </span>
              <input
                name="website"
                type="text"
                className="form-control"
                placeholder="Website Address"
                onChange={updateInfo}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-map-marker"></i>
              </span>
              <input
                required
                name="location"
                type="text"
                className="form-control"
                placeholder="7 Asajon Wy, Eti-Osa 106104, Sangotedo"
                onChange={updateInfo}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-birthday-cake"></i>
              </span>
              <input
                required
                className="form-control"
                type="date"
                name="dob"
                onChange={updateInfo}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-flag"></i>
              </span>
              <select
                name="region"
                className="form-control input-lg"
                onChange={updateInfo}
              >
                <option>Region</option>
                <option>Lagos</option>
                <option>Edo</option>
                <option>Rivers</option>
                <option>Abuja</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { generalInfo, GenDetails };
