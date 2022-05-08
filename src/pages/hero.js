import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";
import axios from "axios";
function Hero() {
  const navigate = useNavigate();
  const [search, handleSearch] = useState({});
  const getQuery = (e) => {
    const query = e.target.name;
    const value = e.target.value;
    handleSearch({ ...search, [query]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const response = await axios.post("jobs/joblist", search);
    if (response.data.length)
      return navigate("/joblist", { state: { result: response.data } });
  };

  return (
    <Wrapper>
      <>
        <div className="banner XXbanner">
          <div className="container">
            <div className="banner-caption">
              <div className="col-md-12 col-sm-12 banner-text">
                <h1>Find Your Dream Job</h1>

                <form onSubmit={submitForm} className="form-horizontal">
                  <div className="col-md-4 no-padd">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control right-bor"
                        name="joblist"
                        placeholder="Tittle, Companies"
                        onChange={getQuery}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 no-padd">
                    <div className="input-group">
                      <select
                        name="category"
                        className="form-control right-bor"
                        onChange={getQuery}
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
                  <div className="col-md-3 no-padd">
                    <div className="input-group">
                      <select
                        name="city"
                        className="form-control"
                        onChange={getQuery}
                      >
                        <option>Choose Region</option>
                        <option>Lagos</option>
                        <option>Edo</option>
                        <option>Abuja</option>
                        <option>Rivers</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 no-padd">
                    <div className="input-group">
                      <button type="submit" className="btn btn-primary">
                        Search Job
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  );
}
export default Hero;
