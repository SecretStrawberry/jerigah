import React from "react";
import "./Header.css";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <header className="header" style={{ backgroundColor: props.background }}>
      <Navigation />
      <h1 className="header-h1">{props.h1}</h1>
      <p>{props.paragraph}</p>
    </header>
  );
}

export default Header;
