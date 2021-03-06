import React from "react";

import Header from "./components/Header";

import Footer from "./components/Footer";
import ClansContent from "./components/ClansContent";

import "./AmuRins.css";

import warlock from "./../images/warlock.png";
import blacksmith from "./../images/blacksmith.png";

// rgba(41, 127, 135, 1)

function AmuRins(props) {
  return (
    <div className="amurins">
      <Header
        background="rgba(41, 127, 135, 0.9)"
        h1="Amu Rins"
        paragraph="The sotry of powerfull worlocks and master craftsman"
      />
      <ClansContent
        imageSize="200px"
        //////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////// Warlocks title and image /////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        title1="The Warlocks"
        image1={warlock}
        altImage1="warlock casting a fire spell"
        //////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// Warlocks paragraphs ////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        firstCharacterParagrph1="The warlocks of Amu Rin are trained in the mystical arts.
        Their devotion to these arts gives them a better understanding of the world that surrounds
        them, and the world of the spirits."
        firstCharacterParagrph2="With such great knowledge comes great power and great responsibility.
        Their devotion to all living creatures is remarkable, but this does not stop them to use the
        the power within them to defend their brothers and sisters."
        firstCharacterParagrph3="The warlocks split into two schools: The Elementals and The Sipirts Whisperers"
        //////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////// craftsman title and image ////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        title2="The Craftsman"
        image2={blacksmith}
        altImage2="blacksmith forging a sword"
        //////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////// craftsman paragraphs /// /////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        secondCharacterParagraph1="The Craftsmen are using their knowledge to build gadgets and traps.
        The magic runs through their veins which gives them the power to imbue weapons and armours."
        secondCharacterParagraph2="In the heat of battle their gadgets and traps are a wellcomed support
        as it is their power to heal."
        secondCharacterParagraph3="They follow just one school: The Crafts and Healing Temple"
      />
      <Footer background="rgba(41, 127, 135, 1)" />
    </div>
  );
}

export default AmuRins;
