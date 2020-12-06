import React, { useState } from 'react';
import Cloud from "../../img/Cloud.png";
import Eye from "./eyeIcon";

export default function SignUp() {

  function signUpOff () {
    let divUp = document.getElementsByClassName("SignUp");
    divUp.style.display = "none"
  }
  //use state
    function eyeBut () {
    let input = document.getElementsByClassName("InputPassword");
    input.type = "text";
  }
  
  return (
    <div className="SignUp">
      <div className="Sign-up-header">
        <img src={Cloud}></img>
      </div>
      <div className="Sign-up">
        <div className="pointer">
          <a href="#" onClick = {signUpOff}>
            <small>Sign in </small>
            <font> &gt;</font>
          </a>
        </div>
        <h1>Sign Up</h1>
          <div className = "UserIMG">

          </div>
        <small>Please enter your login, email and password</small>
        <br />
        <div className="MySendCodeForm">
          <form>
            <input
              required
              className="InputLogin"
              placeholder="login"
              minLength="5"
              maxLength="30"
              type="text"
            ></input>
          </form>
          <form>
            <input
              required
              className="InputEmail"
              placeholder="email"
              type="email"
            ></input>
          </form>
          <form>
            <div className="Vlads">
              <input
                required
                id="InputPassword"
                className="InputPassword"
                type="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              ></input>
              <button type="button" onClick = {eyeBut}>
                <Eye />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
