import React, { useState } from "react";
import "../Styles/Login.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Login = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [nameError, setNameError] = useState([""]);
  let [emailError, setEmailError] = useState([""]);
  let [passError, setPassError] = useState([""]);
  //Form Submition
  let FormSubmitHandling = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setNameError(`Username can't be blank`);
    } else if ((name.length > 0) & (name.length < 3)) {
      setNameError(`Minimum 3 character required`);
    } else {
      setNameError("");
    }
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

          <p>
            Already have an account ?{" "}
            <span>
              <Link to="/signUp">Sign in</Link>
            </span>
          </p>
          <div className="socialPlatform">
            <button>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              Sign Up
            </button>
            <button>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/48/facebook.png"
                alt="facebook"
              />
              Sign Up
            </button>
          </div>
          <p className="or">(or)</p>
          <form onSubmit={FormSubmitHandling} id="form">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="error">{nameError}</span>
              </label>
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* {name.length >= 0 && name.length < 3 ? 
                <i className="fa-solid fa-circle-exclamation failure-icon"></i>
               : 
                <i className="fa-solid fa-circle-check success-icon"></i>
              } */}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="error">{emailError}</span>
              </label>
              <i className="fa-solid fa-envelope"></i>
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
              <i className="fa-solid fa-lock"></i>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
