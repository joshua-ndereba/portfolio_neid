import "./herostyles.css";
import React from 'react';
import image0 from "../assets/image0.jpeg";
import { Link } from "react-router-dom";


const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="image0" src={image0} alt="image0" />

        </div>    
        <div className="content">
          <p>HI, I AM  A FRONTEND DEVELOPER</p>
          <h1>I AM ALSO A SECURITY ANALYST</h1>
          <div>

            <Link to="/experience" className="btn">experience</Link>
            <Link to="/projects" className="btn">projects</Link>
            <Link to="/contacts" className="btn btn-light">contacts</Link>         
          </div>
        </div>
    </div>
  )
}

export default Heroimage;

