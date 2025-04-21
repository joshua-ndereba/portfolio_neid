import "./experiencecontentstyles.css"
import Experiencedata from "./experiencedata"
import Expcard from "./expcard"
import React from 'react'
import web from "../../assets/expweb.png"
import { NavLink } from "react-router-dom"

const experincecontent = () => {
  return (
    <div className="education">
      <h1>Educational Background</h1>
      <div className="educationContainer">
        {Experiencedata.map((val, ind) => (
          <Expcard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
          />
        ))}
      </div>

      <div className="professional-section">
        <h1>Professional Experience</h1>
        <div className="content-card">
          <div className="content-image">
            <img src={web} alt="Web Development"/>
            <h2>Full Stack Development</h2>
            <div className="pro-btns">
              <NavLink to="/projects" className="btn">View Projects</NavLink>
              <NavLink 
                to="/certifications"
                className="btn"
              >
                Certifications
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experincecontent