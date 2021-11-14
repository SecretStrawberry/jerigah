import React from "react";
import Navigation from "./Navigation";

import { Breakpoint, BreakpointProvider } from "react-socks";

import "./Header.css";
import "./glitch.scss";

function Header(props) {
  return (
    <BreakpointProvider>
      <header className="header" style={{ backgroundColor: props.background }}>
        <Breakpoint customQuery="(min-width: 501px)">
          <Navigation />
        </Breakpoint>
        <h1 className="header-h1 glitch" data-text={props.h1}>
          {props.h1}
        </h1>
        <p>{props.paragraph}</p>
      </header>
    </BreakpointProvider>
  );
}

export default Header;
