import { Link } from "react-scroll"; // Use react-scroll for smooth scrolling
import "./navbarstyles.css";
import React, { useState } from "react";
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [color,setcolor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setcolor(true);
      }else{
        setcolor(false);
    }
  }
  window.addEventListener('scroll',changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to="home" smooth={true} duration={500}>
            <h1>Portfolio</h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="/about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="/experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="/projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="/contacts" smooth={true} duration={500}>Contacts</Link></li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click? (<FaTimes size={20} style={{color: "#fff"}}/>):
           (<FaBars size={20} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar;