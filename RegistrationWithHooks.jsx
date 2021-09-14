import React from "react";
import { useState } from "react";
import "./RegistrationWithHooks.css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
const RegistrationWithHooks = () => {
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleUserName = (event) => {
    setValue({ ...values, username: event.target.value });
  };
  const handleEmail = (event) => {
    setValue({ ...values, email: event.target.value });
  };
  const handlePassword = (event) => {
    setValue({ ...values, password: event.target.value });
  };
  const [submited, setSubmit] = useState(false);

  const submission = (event) => {
    event.preventDefault();
    if (values.username && values.email && values.password) {
      setValid(true);
    }
    setSubmit(true);
  };

  const [valid, setValid] = useState(false);

  const [login, setLogin] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  const responseFacebook = (response) => {
    console.log(response);
    setLogin(true);
  };

  return (
    <div>
      <img className="wave" src="img/wave.png" />
      <div className="container">
        <div className="img">
          <img src="img/bg.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={submission}>
            <img src="img/avatar.svg" />
            <h2 className="title">Welcome</h2>
            {submited && valid ? <h1>Sucess</h1> : null}
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  value={values.username}
                  onChange={handleUserName}
                />
                {submited && !values.username ? (
                  <span>Please Enter your username first</span>
                ) : null}
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <h5>Email</h5>
                <input
                  type="Email"
                  value={values.email}
                  onChange={handleEmail}
                />
                {submited && !values.email ? (
                  <span>Please Enter your Email first</span>
                ) : null}
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  value={values.password}
                  onChange={handlePassword}
                />
                {submited && !values.password ? (
                  <span>Please Enter your password first</span>
                ) : null}
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input
              type="submit"
              className="btn"
              defaultValue="Login"
              onSubmit={submission}
            />
            {/* Google login button
                First we have to install through npm install react-google-login */}
            <GoogleLogin
              clientId=""
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicey={"single_host_orgin"}
            />
            <div className="facebook-button">
              <FacebookLogin
                appId=" 324108539461201"
                autoLoad={true}
                fields="name,email,picture"
                //   onClick={componentClicked}
                callback={responseFacebook}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationWithHooks;
