import { GenDetails, generalInfo } from "./userInputs/general";
import { MainInfo, mainData } from "./userInputs/mainInfo";
import { Education, eduInfo } from "./userInputs/education";
import { Experience, exprInfo } from "./userInputs/experience";
import { Skills, skillInfo } from "./userInputs/skills";
import Wrapper from "./wrapper";
const allDetails = (e) => {
  // e.preventDefault();
  const data = {
    ...generalInfo,
    ...mainData,
    ...skillInfo,
    education: eduInfo || {},
    experience: exprInfo || {},
  };
  console.log(data);
};
function Resume() {
  return (
    <Wrapper>
      <div className="Loader"></div>
      <div className="wrapper">
        <div className="clearfix"></div>
        <section className="inner-header-title blank">
          <div className="container">
            <h1>Create Resume</h1>
          </div>
        </section>
        <form onSubmit={allDetails}>
          <div className="clearfix"></div>
          {<MainInfo />}
          <section className="full-detail">
            <div className="container">
              {<GenDetails />}
              {<Education />}
              {<Experience />}
              {<Skills />}
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-success btn-primary small-btnX"
              >
                Submit details
              </button>
            </div>
          </section>
        </form>
      </div>
    </Wrapper>
  );
}
export default Resume;
