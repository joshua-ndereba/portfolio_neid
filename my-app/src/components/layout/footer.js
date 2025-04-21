import "./footerstyle.css";
import { FaFacebook, FaTwitter, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import React, { useState } from 'react';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="footer">
      <div className="footer-container">
          <div className="left">
              <div className="location">
                  <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                  <div>
                      <p>Embakasi</p>
                      <p>Nairobi, Kenya</p>
                  </div>
              </div>
              <div className="phone">
                  <h4>
                      <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}} />
                      +254 793 643 966
                  </h4>
              </div>
              <div className="email">
                  <h4>
                      <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}} />
                      joshneid07@gmail.com
                  </h4>
              </div>
          </div>

          <div className="right">
              <h4>About the Company</h4>
              <p className={isExpanded ? 'expanded' : ''}>
                  This is me, Joshua Ndereba, a certified and qualified security engineer. I enjoy discussing new projects, implementing new security
                  models, and joining the fight against cyber criminals. I am also into DevOps and software engineering.
              </p>
              <span className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
              <br />
              <br />
              <h4>Connect with me</h4> 
              <div className="social">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
