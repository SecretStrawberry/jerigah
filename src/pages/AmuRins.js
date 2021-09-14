import React from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer";

function AmuRins() {
  return (
    <div className="home">
      <Navigation />
      <Header
        h1="Amu Rins"
        paragraph="The sotry of powerfull worlocks and master craftsman"
      />
      <Footer />
    </div>
  );
}

export default AmuRins;
