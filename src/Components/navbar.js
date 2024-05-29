import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="img/volleyBallPic.png" className="logo-icon" alt="Logo" />
        </NavLink>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/quiz" className="btn"><div className="nav-text">Quiz</div></NavLink>
        <NavLink to="/diagram" className="btn"><div className="nav-text">Diagram</div></NavLink>
        <NavLink to="/resources" className="btn"><div className="nav-text">Resources</div></NavLink>
      </div>
    </div>
  );
}

export default Navbar;
