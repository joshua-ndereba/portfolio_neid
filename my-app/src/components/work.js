import "./workcardstyles.css";
import pro1 from "../assets/image1.png";

import React from 'react';
import { NavLink } from "react-router-dom";

const work = () => {
  return (
   
    <div className="project-card">
                <img src={pro1} alt="" />
                <h2 className="project-title">project</h2>
                <div className="pro-details">
                    <p>this is my project lol</p>
                    <div className="pro-btns">
                        <NavLink to="url.com"
                        className="btn">view</NavLink>
                         <NavLink to="url.com"
                        className="btn">source</NavLink>
                    </div>
                </div>
      </div>
           
  )
}



export default work;