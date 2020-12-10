import React, { useState } from "react";
import Cloud from "../../img/Cloud.png";
import Eye from "./eyeIcon";

export default function SignUp({ onButtonClick }) {
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

  return (
    <div className="SignUp">
      <div className="Sign-up-header">
        <img src={Cloud}></img>
      </div>
      <div className="Sign-up">
        <div className="pointer">
          <a href = ""
            onClick={() => {
              onButtonClick();
            }}
          >
            <small>Sign in </small>
            <font> &gt;</font>
          </a>
        </div>
        <h1>Sign Up</h1>
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
                type={count}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              ></input>
              <button className = "Eye" type="button" onClick={change}>
                <Eye />
              </button>
            </div>
          </form>
          <div className = "footerBut">
          <button className = "ButSignUp">
            Sign up
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
