import { GenDetails, generalInfo } from "../userInputs/general";
import { MainInfo, mainData } from "../userInputs/mainInfo";
import { Education, eduInfo } from "../userInputs/education";
import { Experience, exprInfo } from "../userInputs/experience";
import { Skills, skillInfo } from "../userInputs/skills";
import { useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";
import axios from "axios";
function Resume() {
  const navigate = useNavigate();
  let user = localStorage.getItem("user");

  const allDetails = async (e) => {
    e.preventDefault();
    const details = {
      ...generalInfo,
      ...mainData,
      ...skillInfo,
      education: eduInfo || {},
      experience: exprInfo || {},
    };

    if (user) {
      user = JSON.parse(user);
      const { token } = user;
      const response = await axios.post("user/createresume", details, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        navigate("/profile");
      }
    }
  };
  return (
    <Wrapper>
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
