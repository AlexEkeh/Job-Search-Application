import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate();
  const [details, handleDetails] = useState({});
  const getInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleDetails({ ...details, [name]: value });
  };

  const createUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("user/create", details);
    if (response.data && details.role === "Recruiter") {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/profile", { state: { result: response.data } });
    } else if (response.data && details.role === "Applicant") {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/createresume");
    }
  };

  return (
    <Wrapper>
      <div className="simple-bg-screen-login">
        <div className="wrapper">
          <section className="login-screen-sec">
            <div className="container">
              <div className="login-screen">
                <div>
                  <img
                    src="assets/img/logo.png"
                    className="img-responsive"
                    alt="logo"
                  />
                </div>
                <form onSubmit={createUser}>
                  <select
                    name="role"
                    className="form-control form-selector"
                    onChange={getInfo}
                    required
                  >
                    <option>Account type</option>
                    <option>Applicant</option>
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
                    Have You Account? <Link to={"/login"}> Login</Link>
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
