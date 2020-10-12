import React from "react";
import logo from "../assets/logo-wide-black.png";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex">
          <div className="mr-auto p-2">
            <img
              src={logo}
              className="logo"
              alt="Logo for Happy Trees Homestead in black including icon of a pine tree"
            />
          </div>
          <div className="p-2 align-self-center">Home</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
