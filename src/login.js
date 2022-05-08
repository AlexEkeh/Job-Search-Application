import { useState } from "react";
import Wrapper from "./wrapper";
function Login() {
  const [details, handleDetails] = useState({});
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
                    <a href="#"> Create An Account</a>
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
