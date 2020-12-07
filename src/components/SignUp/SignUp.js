import React, { Component, useState } from "react";
import Cloud from "../../img/Cloud.png";
import Eye from "./eyeIcon";

export default function SignUp() {
  const [count, setCount] = useState("password");
  const [item, setItem] = useState(true);
  const [place, setPlace] = useState(
    "&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
  );
  class ANS extends Component {
    //use state
    Change() {
      if (item) {
        item = !item;
        count = "text";
        place = "password";
      } else {
        item = !item;
        count = "password";
        place = "&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;";
      }
    }

    render() {
      return (
        <div className="SignUp">
          <div className="Sign-up-header">
            <img src={Cloud}></img>
          </div>
          <div className="Sign-up">
            <div className="pointer">
              <a href="#">
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
                    placeholder={place}
                  ></input>
                  <button type="button" onClick={() => this.Change()}>
                    <Eye />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
