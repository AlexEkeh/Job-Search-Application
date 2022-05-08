import { Link, useNavigate } from "react-router-dom";
function Wrapper(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper"></div>
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="navbar-header" onClick={() => navigate(0)}>
            <Link to={"/"} className="navbar-brand">
              <img
                src="assets/img/logo-white.png"
                className="logo logo-display"
                alt=""
              />
              <img
                src="assets/img/logo-white.png"
                className="logo logo-scrolled"
                alt=""
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link to={"/signup"}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>SignUp
                </Link>
              </li>
              <li className="left-br">
                <Link to={"/login"} className="signin">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearfix"></div>
      {props.children}
      <div className="clearfix"></div>
      <footer className="footerLast">Copyright &copy; Group-3</footer>
      <div className="clearfix"></div>
    </>
  );
}
export default Wrapper;
