import React from "react";

function Programs() {
  return (
      <div className="Programs">
        <h1>OUR PROGRAMS</h1>
        <div className="container">
            <div className="card">
                <img src= "assets/leaf.svg"/>
                <h2>Nature Challenge</h2>
            </div>
            <div className="card">
                <img src= "assets/Handshake.svg"/>
                <h2>Volunteering  Experience</h2>
            </div>
            <div className="card">
                <img src= "assets/training.svg"/>
                <h2>Professionnal Training</h2>
            </div>
        </div>
      </div>
  );
}

export default Programs;