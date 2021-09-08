import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
