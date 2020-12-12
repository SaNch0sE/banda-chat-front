import React, { useState } from "react";
import Cloud from "../../img/Cloud.png";
import Eye from "./eyeIcon";

export default function SignUp({ onButtonClick }) {
  let [count, setCount] = useState("password");
  let [item, setItem] = useState(true);
  let login = React.createRef();
  let password = React.createRef();
  let email = React.createRef();

  const change = () => {
    if (item) {
      setCount("text");
      setItem(!item);
    } else {
      setItem(!item);
      setCount("password");
    }
  };

  const ButCall = () => {
    const axios = require('axios');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.current.value).toLowerCase()) && password.current.selectionEnd > 3){
    axios.post('https://reqres.in/api/users', {
      login: login.current.value,
      email: email.current.value,
      password: password.current.value
    })
    .then (res => {
      if (res.status === 201)
      console.log(res.status);
    })
  }
  }

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
              ref={login}
            ></input>
          </form>
          <form>
            <input
              required
              className="InputEmail"
              placeholder="email"
              type="email"
              ref={email}
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
                ref={password}
              ></input>
              <button className = "Eye" type="button" onClick={change}>
                <Eye />
              </button>
            </div>
          </form>
          <div className = "footerBut">
          <button className = "ButSignUp" onClick={ButCall}>
            Sign up
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
