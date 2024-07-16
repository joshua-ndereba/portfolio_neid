import "./experiencecontentstyles.css"
import Experiencedata from "./experiencedata"
import Expcard from "./expcard"
import React from 'react'
import web from "../../assets/expweb.png"
import { NavLink } from "react-router-dom"

const experincecontent = () => {
  return (
    <div className="education">
        <div className="left">
        <div className="educationContainer">
        {Experiencedata.map((val, ind) => {
                return(
                    <Expcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    
                    />
                
                );
        })}
        
        <div className="exp-card">
          <div className="exp-image">
              <img src={web} alt=""/>
              <h1>WEB DEVELOPMENT</h1>
              <div className="pro-btns">
            <NavLink to="/projects"
            className="btn">view</NavLink>
             <NavLink to="https://tryhackme.com/joshuandereba/badges/intro-to-pentesting"
            className="btn">source</NavLink>
        </div>
          </div>

        </div>
        </div>

           

        </div>
    </div>
  )
}

export default experincecontent