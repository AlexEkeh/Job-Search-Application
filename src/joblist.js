import { useState } from "react";
import renderDisplay from "./searchutils/modalgen";
import Wrapper from "./wrapper";

function JobList(props) {
  const data = props.data;
  const [toDisplay, handleDisplay] = useState(data.slice(0, 3));
  const allJobs = renderDisplay(toDisplay);
  const changePage = (e) => {
    const page = +e.target.textContent;
    const end = page * 3;
    const start = end - 3;
    if (data.length > start) {
      handleDisplay(data.slice(start, end));
    }
  };

  const pageLen = Math.ceil(data.length / 3);
  const pagination = [...Array(pageLen)].map((e, i) => {
    return (
      <li key={"key" + i} className="page-item">
        <button
          className="btn btn-link page-link btn-page"
          onClick={changePage}
        >
          {i + 1}
        </button>
      </li>
    );
  });

  return (
    <Wrapper>
      <div className="Loader"></div>
      <div className="wrapper">
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
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm">{pagination}</ul>
      </nav>
    </Wrapper>
  );
}
export default JobList;
