import React from "react";

function Hero() {
  return (
    <main className="Hero" id="about">
      <div className="Hero-left">
        <h1>
          Join the <span id="movement">movement</span>, save the <span id="planet"> planet </span>
          with every tap.
        </h1>
        <p>
          Taking the lead to preserve, protect and heal nature, begins together
          under one planet
        </p>
        <button className="discover">Discover more</button>
      </div>
      <div className="Hero-right">
        <img src="assets/hero-svg.svg" className="hero-svg"/>
      </div>
    </main>
  );
}

export default Hero;