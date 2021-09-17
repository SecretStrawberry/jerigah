import React from "react";

import "./ClansContent.css";

function ClansContent(props) {
  return (
    <div className="clans-container">
      <section className="clans-presentation">
        <div className="clans-description">
          <div className="clans-text">
            <h2 className="clans-title">{props.title1}</h2>
            <p>{props.firstCharacterParagrph1}</p>
            <p>{props.firstCharacterParagrph2}</p>
            <p>{props.firstCharacterParagrph3}</p>
          </div>
          <img
            src={props.image1}
            alt={props.altImage1}
            width={props.imageSize}
          />
        </div>
        <div className="clans-description">
          <div className="clans-text">
            <h2 className="clans-title">{props.title2}</h2>
            <p>{props.secondCharacterParagraph1}</p>
            <p>{props.secondCharacterParagraph2}</p>
            <p>{props.secondCharacterParagraph3}</p>
          </div>
          <img
            src={props.image2}
            alt={props.altImage2}
            width={props.imageSize}
          />
        </div>
      </section>

      {/* <section className="clans-presentation">
        <div className="clans-description">
          <div>
            <h2 className="clans-title">{props.firstCharacterClasses}</h2>
            <h3>{props.firstCharacterClassTtile1}</h3>
            <h3>{props.firstCharacterClassTtile2}</h3>
          </div>
        </div>
      </section>
      <section className="clans-presentation">
        <div className="clans-description">
          <div>
            <h2 className="clans-title">{props.secondCharacterClasses}</h2>
            <h3>{props.secondCharacterClassTtile1}</h3>
            <h3>{props.secondCharacterClassTtile2}</h3>
            <h3>{props.secondCharacterClassTtile3}</h3>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default ClansContent;
