import React from "react";
import Navigation from "./Navigation";

import "./Header.css";
import "./glitch.scss";

function Header(props) {
  return (
    <header className="header" style={{ backgroundColor: props.background }}>
      <Navigation />
      <h1 className="header-h1 glitch" data-text={props.h1}>
        {props.h1}
      </h1>
      <p>{props.paragraph}</p>
    </header>
  );
}

export default Header;
