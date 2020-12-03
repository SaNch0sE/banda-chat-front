import React from "react";
import IconMoon from "./MiddleIcon";

function Header() {
  return (
    <header>
      <div className="Hlogo">
        <div className="HText">
          <p className="text1">See</p>
          <p className="text2">u</p>
          <p className="text3">Live</p>
        </div>
        <div className="MiddleIcon">
          <IconMoon />
        </div>
        <div className="Hright">
          <input className="InputLogin" placeholder="Login"></input>
          <input
            className="InputPassword"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          ></input>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
