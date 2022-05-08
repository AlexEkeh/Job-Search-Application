import { useState } from "react";
let eduInfo;
function Education() {
  const [EduInfo, handleEduInfo] = useState({});
  const updateInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleEduInfo({ ...EduInfo, [name]: value });
    eduInfo = EduInfo;
  };
  return (
    <>
      <div className="row bottom-mrg extra-mrg">
        <h2 className="detail-title">Add Education</h2>
        <div className="extra-field-box">
          <div className="multi-box">
            <div className="dublicat-box">
              <div className="col-md-12 col-sm-12">
                <input
                  required
                  name="schoolName"
                  type="text"
                  className="form-control"
                  placeholder="School Name, e.g. Decagon Institute"
                  onChange={updateInfo}
                />
              </div>

              <div className="col-md-12 col-sm-12">
                <input
                  required
                  name="qualification"
                  type="text"
                  className="form-control"
                  placeholder="Qualification, e.g. Full Stack Developer"
                  onChange={updateInfo}
                />
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">Date From</span>
                  <input
                    required
                    name="startDate"
                    type="date"
                    className="form-control"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">Date To</span>
                  <input
                    required
                    name="endDate"
                    type="date"
                    className="form-control"
                    onChange={updateInfo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Education, eduInfo };
