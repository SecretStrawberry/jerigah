import React from "react";
import "./Story.css";

function Story(props) {
  return (
    <div className="story-animation-container">
      <h2 className="story-h2">{props.h2}</h2>
      <section className="section-story">
        <div className="story-container">
          <p>
            This is the story of the the clan people of Rhajarta. They appared
            first time in Jerigah as a craftsman tribe that arived here in
            search of peace and resources, since their world could not sustain
            them anymore.
          </p>
          <p>
            When they first encounterd the beasts of Jerigah they had no chance
            of surviving, without changing their ways. So like that they splited
            into to guilds. Nimbulan Guild and Amu Rin Guild.
          </p>
          <p>
            Even though they where to schools of thoughts, totaly separated,
            they fight together as one to defeat their enemys.
          </p>
          <p>
            Nimbulans they are phiscal and strong, well prepared in the art of
            wielding an Jeotr Axe, Terhin Bow or an Areke Sword.
          </p>
          <p>
            Amu Rins they have the power of mind, knowledge and spirit by their
            side. Good understanding of the world allow them to summon the
            forces of nature, spirts from another realm or build fantasitic
            gadgets and weapons.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Story;
