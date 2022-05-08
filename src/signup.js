import { useState } from "react";
import Wrapper from "./wrapper";
function SignUp() {
  const [details, handleDetails] = useState({ category: "Job seeker" });
  const getInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleDetails({ ...details, [name]: value });
  };
  return (
    <Wrapper>
      <div className="simple-bg-screen-login">
        <div className="Loader"></div>
        <div className="wrapper">
          <section className="login-screen-sec">
            <div className="container">
              <div className="login-screen">
                <a href="index-2.html">
                  <img
                    src="assets/img/logo.png"
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <form>
                  <select
                    name="category"
                    className="form-control form-selector"
                    onChange={getInfo}
                    required
                  >
                    <option>Job seeker</option>
                    <option>Recruiter</option>
                  </select>
                  <br />
                  <input
                    required
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    onChange={getInfo}
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={getInfo}
                  />
                  <input
                    required
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={getInfo}
                  />
                  <button className="btn btn-login" type="submit">
                    Sign Up
                  </button>
                  <span className="lowerText">
                    Have You Account? <a href="#"> Login</a>
                  </span>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
export default SignUp;
