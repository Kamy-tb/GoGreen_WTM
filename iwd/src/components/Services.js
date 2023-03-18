import React from "react";

function Services() {
  return (
      <div className="Services" id="services">
        <h1>OUR SERVICES</h1>
        <div className="container">
            <div className="Service card">
                <img src= "assets/damaged.svg"/>
                <h2>Treating damaged plants</h2>
            </div>
            <div className="Service card">
                <img src= "assets/consulting.svg"/>
                <h2>Consulting</h2>
            </div>
        </div>
        <div className="Carousel">
            <h1>GardenMate</h1>
            <p>The application can allow the user to enter information about the plant's growth, such as height, width, number of leaves, etc. over time. It is also possible to use photos to document the plant's growth</p>
            <img src= "assets/points.svg"/>
            <h2>IT Solutions</h2>
        </div>
      </div>
  );
}

export default Services;