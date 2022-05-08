import { useState } from "react";
let exprInfo;
function Experience() {
  const [ExprInfo, handleExprInfo] = useState({});
  const updateInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleExprInfo({ ...ExprInfo, [name]: value });
    exprInfo = ExprInfo;
  };
  return (
    <>
      <div className="row bottom-mrg extra-mrg">
        <h2 className="detail-title">Add Experience</h2>
        <div className="extra-field-box">
          <div className="multi-box">
            <div className="dublicat-box">
              <div className="col-md-12 col-sm-12">
                <input
                  name="employer"
                  type="text"
                  className="form-control"
                  placeholder="Employer"
                  onChange={updateInfo}
                />
              </div>

              <div className="col-md-12 col-sm-12">
                <input
                  name="position"
                  type="text"
                  className="form-control"
                  placeholder="Position, e.g. Web Designer"
                  onChange={updateInfo}
                />
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <span className="input-group-addon">Date From</span>
                  <input
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
                    name="endDate"
                    type="date"
                    className="form-control"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <textarea
                  rows={5}
                  name="description"
                  className="form-control"
                  placeholder="Job Description"
                  onChange={updateInfo}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Experience, exprInfo };
