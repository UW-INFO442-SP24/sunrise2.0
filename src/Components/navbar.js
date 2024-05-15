import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="img/logo.png" className="logo-icon" alt="Logo" />
        </NavLink>
      </div>
      <div className="col text-left">
        <NavLink to="/quiz" className="btn"><div className="nav-text">Quiz</div></NavLink>
        <NavLink to="/diagram" className="btn"><div className="nav-text">Diagram</div></NavLink>
        <NavLink to="/resources" className="btn"><div className="nav-text">Resources</div></NavLink>
      </div>
    </div>
  );
}

export default Navbar;
