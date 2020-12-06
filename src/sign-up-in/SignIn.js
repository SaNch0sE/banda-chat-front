import React from "react";
import CloudMoon from "../img/Cloud-Moon.png";
import Eye from "./eyeIcon";

export default function SignIn() {
  return (
    <div className="SignIn">
      <div className="Sign-in-header">
        <img src={CloudMoon}></img>
      </div>
      <div className="Sign-in">
        <div className="pointer">
          <a href="#">
            <small>Sign up </small>
            <font> &gt;</font>
          </a>
        </div>
        <h1>Sign In</h1>
        <small>Please enter your login/email and password</small>
        <br />
        <div className="MySendCodeForm">
          <form>
            <input
              className="InputLogin"
              placeholder="Login or email"
              minLength="5"
              maxLength="30"
              type="text"
            ></input>
          </form>
          <form>
            <div className = "Vlads">
            <input
              id="InputPassword"
              className="InputPassword"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            ></input>
            <button type = "button"><Eye /></button>
            </div>
          </form>
          <a href="#">
            <small>Forgot your password?</small>
          </a>
        </div>
      </div>
    </div>
  );
}

