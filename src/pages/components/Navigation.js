import React, { useRef } from "react";
import { DetectOutsideClick } from "../../helpers/DetectOustsideClick";
import { Link } from "react-router-dom";
import sword from "../../images/flamingSword.png";
import orb from "../../images/orb.png";

import "./Navigation.css";

function Home() {
  return (
    <div className="secondary-nav-container">
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
}

function Nimbulans() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="secondary-nav-container">
      <Link to="/nimbulans" className="btn" onClick={onClick}>
        Nimbulans
      </Link>

      <nav
        ref={dropdownRef}
        className={`secondary-nav ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>Classes</li>
          <li>Art of war</li>
          <li>Atributes</li>
          <img src={sword} alt="flaming sword" width={"150px"} />
        </ul>
      </nav>
    </div>
  );
}

function AmuRins(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="secondary-nav-container">
      <Link to="/amurins" className="btn" onClick={onClick}>
        Amu Rins
      </Link>
      <nav
        ref={dropdownRef}
        className={`secondary-nav ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>Classes</li>
          <li>Magic</li>
          <li>Atributes</li>
          <img
            className="img-orb-style"
            src={orb}
            alt="flaming sword"
            width={"100px"}
            height={"100px"}
            style={{ marginLeft: "24px" }}
          />
        </ul>
      </nav>
    </div>
  );
}

function Navigation(props) {
  return (
    <div className="navigation" style={{ backgroundColor: props.background }}>
      <Home />
      <Nimbulans />
      <AmuRins />
    </div>
  );
}

export default Navigation;
