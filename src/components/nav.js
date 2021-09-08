import React from "react";
import '../nav.css';

function Navbar() {
  return (
    <header>
      <h1>
        Caro<span className="nav-span">fano</span>
      </h1>
      <nav className="nav">
        <ul>
          <li className="navLi">
            <a href="./assets/images/CV.pdf" download>
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
