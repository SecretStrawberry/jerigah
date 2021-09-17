import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Story from "./components/Story";

import Footer from "./components/Footer";

import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <Header
        h1="Jerigah Chronicles"
        paragraph="A tale of beast and people, of wizards and shadows, all together
        fighting to be the overlord of the domain"
      />

      <Body
        h2First="The Traveled Path of The Nimbulan"
        h2Second="The
        Untraveld
        Path
        of
        Amu
        Rin"
      />
      <Story h2="Who are the Rhajartans" />
      <Footer />
    </div>
  );
}

export default Home;
