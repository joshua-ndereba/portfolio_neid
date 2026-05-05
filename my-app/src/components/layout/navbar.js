
import { NavLink } from "react-router-dom";
import "./navbarstyles.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <NavLink to="/" className="logo-container">
        <h1 className="logo">JN</h1>
        <span className="logo-subtitle">Joshua Ndereba</span>
      </NavLink>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>
            Experience
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/certifications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>
            Certifications
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts" className={({ isActive }) => isActive ? "nav-link active cta-nav" : "nav-link cta-nav"} onClick={handleClick}>
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        className="hamburger"
        onClick={handleClick}
        aria-label={click ? "Close menu" : "Open menu"}
        aria-expanded={click}
      >
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </button>
    </div>
  );
};

export default Navbar;





