import React from "react";
import IconMoon from "../MiddleIcon";

function Header() {
  return (
    <header>
      <div className="Header">
        <div className="HLeft">
          <div className="Icon">
            <IconMoon />
          </div>
          <div className="HText">
            <p className="text1">See</p>
            <p className="text2">u</p>
            <p className="text3">Live</p>
          </div>
        </div>
        <div className="Hright">
          <form>
            <input
              className="InputLogin"
              placeholder="Login or email"
              minLength="5"
              maxLength="30"
            ></input>
          </form>
          <form>
            <input
              className="InputPassword"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            ></input>
          </form>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
