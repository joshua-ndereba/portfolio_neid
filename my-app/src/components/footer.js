import "./footerstyle.css";


import {FaFacebook,FaTwitter, FaHome, FaLinkedin, FaMailBulk,FaPhone} from "react-icons/fa";
import React from 'react'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>embakasi</p>
                        <p>nairobi, kenya</p>
                        
                    </div>
                    <div className="phone">
                    <h4><FaPhone size={20} 
                    style={{color: "#fff", marginRight:"2rem"}} />
                    <p>+254 793 643 966</p></h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk size={20} 
                    style={{color: "#fff", marginRight:"2rem"}}/>
                    <p>joshneid07@gmail.com</p></h4>
                    </div>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>
                    This is me Joshua Ndereba, certified and qualified security engineer. I enjoy discussing new projects, implementing new security
                    models and joining in the fight against cyber criminals
                </p>
                <div className="social">
                    <FaFacebook
                    size={30}
                    style={{color: "#fff", marginRight: "1rem"}} />
                    <FaTwitter                        size={30}
                    style={{color: "#fff", marginRight: "1rem"}} />
                    <FaLinkedin
                    size={30}
                    style={{color: "#fff", marginRight: "1rem"}} /> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default footer