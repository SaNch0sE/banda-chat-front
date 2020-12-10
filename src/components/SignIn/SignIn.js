import React, { useState } from "react";
import CloudMoon from "../../img/Cloud-Moon.png";
import Eye from "./eyeIcon";

export default function SignIn({ onButtonClick }) {
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

  const ButCall = () => {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
      } 
    }
    xhttp.open("POST", "https://repetitora.net/api/JS/Images");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhttp.send();
    function myFunction (data) {
      console.log(data);
    }
  }

  return (
    <div className="SignIn">
      <div className="Sign-in-header">
        <img src={CloudMoon}></img>
      </div>
      <div className="Sign-in">
        <div className="pointer">
          <a
            onClick={() => {
              onButtonClick();
            }}
          >
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
              placeholder="login"
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
              <button className = "Eye" type="button" onClick={change}>
                <Eye />
              </button>
            </div>
          </form>
          <a href="#">
            <small>Forgot your password?</small>
          </a>
          <div className = "footerBut">
          <button className = "ButSignIn" onClick={ButCall}>
            Sign in
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

