import "./herostyles.css";
import React from 'react';
import image0 from "../../assets/image0.jpeg";
import { Link } from "react-router-dom";



const Heroimage = () => {
  return (
    <div className="hero">
      <marquee
      bgcolor="maroon"
      direction ="right"
      behavior="alternate">
        <h1>Joshua Ndereba</h1>
      </marquee> 
        <div className="mask">
            <img className="image0" src={image0} alt="image0" />

        </div>    
        <div className="content">
          <p>HI, I AM  A FRONTEND DEVELOPER</p>
          <h1>I AM ALSO A SECURITY ANALYST</h1>
          
          <div>

            <Link to="/experience" className="btn">experience</Link>
            <Link to="/projects" className="btn">projects</Link>
            <Link to="/contacts" className="btn btn-light">contact me</Link>         
          </div>
        </div>
        <marquee
      bgcolor="maroon"
      direction ="right"
      behavior="alternate">
        <h1>GO TO CONTACTS FOR SERVICES</h1>
      </marquee> 
    </div>
  )
}

export default Heroimage;

