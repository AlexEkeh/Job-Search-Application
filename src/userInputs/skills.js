const skillInfo = { skills: [] };
const skillsArr = [...Array(4)].map((x, i) => (
  <div key={"skill" + i} className="dublicat-box">
    <div className="col-md-6 col-sm-6">
      <input
        name="skill"
        type="text"
        className="form-control"
        placeholder="Skills, e.g. Css, Html..."
        onChange={(e) => {
          skillInfo.skills[i] = e.target.value;
        }}
      />
    </div>
  </div>
));
function Skills() {
  return (
    <>
      <div className="row bottom-mrg extra-mrg">
        <h2 className="detail-title">Add Skills</h2>
        <div className="extra-field-box">
          <div className="multi-box">{skillsArr}</div>
        </div>
      </div>
    </>
  );
}
export { Skills, skillInfo };
