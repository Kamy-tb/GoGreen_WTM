import React from "react";

function Contacts() {
  return (
      <div className="Contacts" id="contact">
        <h1>CONTACT US</h1>
        <div className="container">
            <div className="contact">
                <p>Phone number: +213512345698</p>
                <p>E-mail: SupportGGrren@gogreen.com</p>
            </div>
            <div className="SM">
                <img src="assets/socials.svg" />
            </div>
        </div>
        <p className="rights">All rights are reserved</p>
      </div>
  );
}

export default Contacts;