import { React, useState } from "react";
import "../Styles/SignUp.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState([""]);
  let [passError, setPassError] = useState([""]);
  //Form Submition
  let FormSubmitHandling = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setEmailError(`Email can't be blank`);
    } else {
      setEmailError("");
    }
    if (password.trim() === "") {
      setPassError(`Password can't be blank`);
    } else if ((password.length > 0) & (password.length < 8)) {
      setPassError(`Minimum 8 digits required`);
    } else {
      setPassError("");
    }
    console.log("submiteed");
  };
  return (
    <>
      <div className="Container">
        <div className="left">
          <h4>Shoppy-Fy</h4>
          <div className="image"></div>
          <p className="offer">
            Start for Free & get attractive offers today !
          </p>
        </div>
        <div className="right">
          <h3>Get Started</h3>

          <form id="form" onSubmit={FormSubmitHandling}>
            <h3 className="login_head">Log-In</h3>
            <hr />
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="error">{emailError}</span>
              </label>
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {(email.length >= 0) & (email.length < 15) ? (
                <i className="fa-solid fa-circle-exclamation failure-icon"></i>
              ) : (
                <i className="fa-solid fa-circle-check success-icon"></i>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="pass">
                Password <span className="error">{passError}</span>
              </label>
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Enter your password"
                id="pass"
                name="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* {(password.length >= 0) & (password.length < 8) ? (
                <i className="fa-solid fa-circle-exclamation failure-icon"></i>
              ) : (
                <i className="fa-solid fa-circle-check success-icon"></i>
              )} */}
            </div>

            <button type="submit">Submit</button>
            <p className="login_route">
              Not a member ?{" "}
              <span>
                <Link to="/login">Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
