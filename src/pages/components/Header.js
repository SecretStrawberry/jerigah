import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-h1 header-h1-animate">{props.h1}</h1>
      <p>{props.paragraph}</p>
    </header>
  );
}

export default Header;
