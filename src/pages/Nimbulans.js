import React from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer";

function Nimbulans() {
  return (
    <div className="home">
      <Navigation />
      <Header
        h1="Nimbulans"
        paragraph="The story of the brave soldiers and the masters of the art of war"
      />
      <Footer />
    </div>
  );
}

export default Nimbulans;
