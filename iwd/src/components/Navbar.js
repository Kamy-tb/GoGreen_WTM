import React from "react";

function Navbar() {
  return (
    <header className="navigation">
      <div className="">
        <div className="navcontainer">
          <div className="navlogo">
            <a className="block text-teal-600" href="/">
            <img src="assets/logo.svg" className="logo"/>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a className="navitem" href="#">
                    Home
                  </a>
                </li>

                <li>
                  <a className="navitem" href="#about">
                    About
                  </a>
                </li>

                <li>
                  <a className="navitem" href="#services">
                    Services
                  </a>
                </li>

                <li>
                  <a className="navitem" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;