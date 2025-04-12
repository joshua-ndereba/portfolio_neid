import { NavLink } from "react-router-dom"; // Use NavLink for routing
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
      <NavLink to="/">
        <h1>Portfolio</h1>
      </NavLink>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/" onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" onClick={handleClick}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={handleClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={handleClick}>
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/certifications" onClick={handleClick}>
            Certifications
          </NavLink>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;