import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [details, handleDetails] = useState({});
  const getInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleDetails({ ...details, [name]: value });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("user/login", details);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/profile", { state: { result: response.data } });
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
                <form onSubmit={loginUser}>
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
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
                    Login
                  </button>
                  <span className="lowerText">
                    You Have No Account?
                    <Link to={"/signup"}> Create An Account</Link>
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
export default Login;
