import React, { useState } from "react";
import CloudMoon from "../../img/Cloud-Moon.png";
import Eye from "./eyeIcon";

export default function SignIn() {
  let [count, setCount] = useState("password");
  let [item, setItem] = useState(true);

  const change = () => {
    if (item) {
      setCount("text");
      setItem(!item);
    } else {
      setItem(!item);
      setCount("password");
    }
  };

  const OFF = () => {
    
  }

  return (
    <div className="SignIn">
      <div className="Sign-in-header">
        <img src={CloudMoon}></img>
      </div>
      <div className="Sign-in">
        <div className="pointer">
          <a href="#" onClick = {OFF}>
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
            <div className="Vlads">
            <input
                required
                id="InputPassword"
                className="InputPassword"
                type={count}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              ></input>
              <button type="button" onClick = {change}>
                <Eye />
              </button>
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
