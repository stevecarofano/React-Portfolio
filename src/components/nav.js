import React, { useState } from "react";
import { Link } from 'react-router-dom';
import resume from '../images/resume-SC.pdf';
import '../nav.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header>
      <h1>
        Caro<span className="nav-span">fano</span>
      </h1>
      <nav className="nav">
        <ul>
          <li><Link to="/" onclick={handleClick}>Home</Link></li>
          <li><Link to="/About" onClick={handleClick} className='nav-links'>About</Link></li>
          <li><Link to="/Projects" onclick={handleClick}>Projects</Link></li>
          <li><Link to="/Contact" onclick={handleClick}>Contact</Link></li>
          <li><a href={resume} download="resume-SC">Download CV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
