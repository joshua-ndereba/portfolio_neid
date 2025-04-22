import "./footerstyle.css";
import {  FaTwitter, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaInstagram } from "react-icons/fa";
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
              <h4>About Me</h4>
              <div className="about-content">
                  <p className={isExpanded ? 'expanded' : ''}>
                      I'm Joshua Ndereba, a certified Security Engineer and DevOps enthusiast. 
                      My expertise includes:
                      <ul className="expertise-list">
                          <li>Security Implementation & Analysis</li>
                          <li>Cybersecurity Solutions</li>
                          <li>DevOps Practices</li>
                          <li>Software Engineering</li>
                      </ul>
                      {isExpanded && (
                          <span className="additional-info">
                              I'm passionate about implementing robust security models 
                              and contributing to the fight against cyber threats while 
                              maintaining modern development practices.
                          </span>
                      )}
                  </p>
                  <button 
                      className="read-more-btn" 
                      onClick={() => setIsExpanded(!isExpanded)}
                  >
                      {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
              </div>
              <br />
              <h4>Connect with me</h4> 
              <div className="social">
                  <a href="https://www.instagram.com/_short._.neid_/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                  <a href="www.linkedin.com/in/joshua-ndereba" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
