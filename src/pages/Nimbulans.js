import React from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ClansContent from "./components/ClansContent";

import soldier from "../images/soldier.png";
import archer from "../images/archer.png";

import "./Nimbulans.css";

// rgba(95, 122, 97, 1);

function Nimbulans(props) {
  return (
    <div className="nimbulans">
      <Navigation background="rgba(95, 122, 97, 0.7)" />
      <Header
        background="rgba(95, 122, 97, 0.7)"
        h1="Nimbulans"
        paragraph="The story of the brave soldiers and the masters of the art of war"
      />
      <ClansContent
        imageSize="350px"
        //////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////// soldier title and image //////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        title1="The Soldiers"
        image1={soldier}
        altImage1="soldier holding hammer"
        //////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// soldiers paragraphs ////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        firstCharacterParagrph1=" The soldiers of Nimbulans are trained to respect life and have
        courage, to honor all beasts and man. Never take a life if is not
        required."
        firstCharacterParagrph2="Even though they respect life, they are strong and skiled fighters
        and will not hesitate to go into battle for the just cause."
        firstCharacterParagrph3="They split into two schools: The Swordsman and Axeman."
        //////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////// archers title and image ///////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        title2="The Archers"
        image2={archer}
        altImage2="archer drawing arrow"
        //////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// archers paragraphs /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        secondCharacterParagraph1="The archers share the same ideology to respect all life."
        secondCharacterParagraph2=" Beaing the scouts of the Nimbulans, they are always ahead of the
        party. Beaing very stealthy, they attack from cover, conveing a
        great deal of damage."
        secondCharacterParagraph3=" They split into three schools: The Archwielders, Crossbowmans,
        Riflemans."
        //////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////// soldiers classes //////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        // firstCharacterClasses="Soldier classes"
        // firstCharacterClassTtile1="Swordsman"
        // firstCharacterClassTtile2="Axeman"
        //////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////// archer classes /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        // secondCharacterClasses="Archer classes"
        // secondCharacterClassTtile1="Archwielders"
        // secondCharacterClassTtile2="Crosbowman"
        // secondCharacterClassTtile3="Rifleman"
      />
      <Footer background="rgba(95, 122, 97, 0.7)" />
    </div>
  );
}

export default Nimbulans;
