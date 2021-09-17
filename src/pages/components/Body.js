import React from "react";

import "./Body.css";
import "./BodyAnimations.css";

function Body(props) {
  return (
    <div className="body">
      <div className="parent-section-1">
        <section className="section section-1">
          <h2>{props.h2First}</h2>
          <p>
            All man and beast alike travel this path as they try to get to the
            Lanur Lake in the Maky Mountains. But this path is filled with
            thives and monsters that prey on the weak and the unwary.
          </p>
          <p>
            Even though is the most travelled road, is the most dangerous. The
            bounty is plentiful, the mobs are strong. Many perish in their
            endevour. Take this path and most likely you find your doom.
          </p>
          <p>
            Get the power of lake Lanur and you will have control over land and
            beast.
          </p>
        </section>
      </div>
      <div className="parent-section-2">
        <section className="section section-2">
          <h2>{props.h2Second}</h2>
          <p>
            This path is one of finding ones inner strength. Just the wise and
            the enlightened will succeed to go through, as this path is one of
            knowing yourself and the world around you.
          </p>
          <p>
            There are no mobs here, at least not the physical ones. But the
            spiritual challenges are as powerful as physical ones.
          </p>
          <p>
            If you reach lake Lanur through this path, your power and knowledge
            can save or destroy all around.
          </p>
        </section>
      </div>
    </div>
  );
}
export default Body;
