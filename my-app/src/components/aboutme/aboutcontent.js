import "./aboutcontent.css"

import React from 'react'
import { Link } from "react-router-dom"

import stack1 from "../../assets/4.png"
import stack2 from "../../assets/image8.jpeg"
const aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>
                WHO AM I?
            </h1>
            <h2>
            <p>I am an all rounded IT expert who is capable of doing certain IT related tasks in the most reasonable and short amount of time.</p>
            <p>i have done a degree in computer science and have attaind maximum skills for any computer work. </p>\n
            <p>My most amazing and best skills are:-  </p>
            <p>cyber seurity(penetration testing, security analysation, threat management)</p>
            <p>web development(frontend and backend) </p>
            <p>networking</p>
            <p>programming</p>
            <p>and many more</p></h2>
            <Link to="/contacts">
            <button className="btn">Contact Me</button>
            </Link>
           
        

        <div className="right">
            <div className="img-container">
                <div className="top">
                    <img src={stack1} alt="" />
                    
                </div>
                <div className="bottom">
                    
                    <img src={stack2} alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default aboutcontent