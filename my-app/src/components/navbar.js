import { Link } from "react-router-dom";
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
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li> <Link to="/">home</Link> </li>
            <li> <Link to="/experience">experience</Link> </li>
            <li> <Link to="/projects">projects</Link> </li>  
            <li> <Link to="/skills">skills</Link> </li> 
            <li> <Link to="/contacts">contacts</Link> </li> 
            
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click? (<FaTimes size={20} style={{color: "#fff"}}/>):
           (<FaBars size={20} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar;