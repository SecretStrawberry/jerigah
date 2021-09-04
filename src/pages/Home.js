import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Story from "./components/Story";
import Navigation from "../pages/components/Navigation.js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Header />
      <Body />
      <Story />
    </div>
  );
}

export default Home;