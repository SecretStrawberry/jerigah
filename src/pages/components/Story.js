import React from "react";
import "./Story.css";
import warrior from "../../images/warriorHome.png";
import warrior1 from "../../images/warriorHome1.png";

function Story(props) {
  return (
    <div className="story-animation-container">
      <section className="section-story">
        <img
          src={warrior}
          alt="warrior holding axe on shoulder"
          width={"300px"}
        />
        <div className="story-container">
          <h2 className="story-h2">{props.h2}</h2>
          <p>
            This is the story of the clan people of Rhajarta. They appeared
            first time in Jerigah as a craftsman tribe that arrived here in a
            search of peace and resources, since their world could not sustain
            them anymore.
          </p>
          <p>
            When they first encountered the beasts of Jerigah they had no chance
            of surviving, without changing their ways. So like that they split
            into two guilds. Nimbulan Guild and Amu Rin Guild.
          </p>
          <p>
            Even though they were to schools of thought, totally separated, they
            fight together as one to defeat their enemies.
          </p>
          <p>
            Nimbulans are physical and strong, well prepared in the art of
            wielding an Jeotr Axe, Terhin Bow or an Areke Sword.
          </p>
          <p>
            Amu Rins have the power of mind, knowledge and spirit by their side.
            A good understanding of the world allows them to summon the forces
            of nature, spirits from another realm or build fantastic gadgets and
            weapons.
          </p>
        </div>
        <img
          src={warrior1}
          alt="warrior holding axe on shoulder"
          width={"250px"}
        />
      </section>
    </div>
  );
}
export default Story;
