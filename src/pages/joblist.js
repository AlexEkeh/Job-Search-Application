import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import renderDisplay from "../searchutils/jobcardgen";
import Wrapper from "../wrapper";
let end = 6;
let start = 0;
function JobList() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state.result;
  const [toDisplay, handleDisplay] = useState(data.slice(start, end));
  const allJobs = renderDisplay(toDisplay);
  const changePage = (e) => {
    switch (e.target.textContent) {
      case "Prev":
        if (start > 6) {
          end -= 6;
          start = end - 6;
          handleDisplay(data.slice(start, end));
        }
        break;

      case "Next":
        if (data.length > end) {
          end += 6;
          start = end - 6;
          handleDisplay(data.slice(start, end));
        }
        break;

      default:
        navigate(0);
        break;
    }
  };

  return (
    <Wrapper>
      <div className="wrapper joblist-page">
        <section className="inner-header-title">
          <div className="container">
            <h1>Browse Jobs</h1>
          </div>
        </section>
        <div className="clearfix"></div>
        <section className="brows-job-category">
          <div className="container">
            <div className="row extra-mrg">{allJobs}</div>
          </div>
        </section>
      </div>
      <div className="clearfix"></div>
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm">
          <li className="page-item">
            <button
              className="btn btn-secondary page-link btn-page"
              onClick={changePage}
            >
              Prev
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn btn-dark page-link btn-page"
              onClick={changePage}
            >
              <i className="fa fa-home"></i>
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn btn-secondary page-link btn-page"
              onClick={changePage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}
export default JobList;
