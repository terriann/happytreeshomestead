import React from "react";
import logo from "../assets/logo-white.png";
import "./hero.scss";

function Intro() {
  return (
    <div className="intro">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div class="d-flex justify-content-center py-4">
            <img
              className="logo"
              src={logo}
              alt="Logo for Happy Trees Homestead including icon of a pine tree and est 2018"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
