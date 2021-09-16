import React from "react";
import FooterNavigation from "./FooterNavigation";
import axe from "../../images/axe.svg";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer" style={{ backgroundColor: props.background }}>
      <FooterNavigation />
      <div className="copyright-logo-container">
        <img src={axe} alt="axe and sword" className="icon" />
        <p>
          ©2021 SecretStrawbery. All rights reserved. All trademarks are the
          property of their respective owners.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
