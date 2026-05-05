import "./footerstyle.css";
import {  FaTwitter, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaInstagram, FaGithub, FaCodepen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import React, { useState } from 'react';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          {/* Contact Section */}
          <div className="footer-section contact-section">
            <div className="section-title">
              <h3>📍 Get In Touch</h3>
              <div className="title-underline"></div>
            </div>
            
            <div className="contact-item">
              <FaHome size={22} className="contact-icon" />
              <div className="contact-text">
                <p className="label">Location</p>
                <p className="value">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone size={22} className="contact-icon" />
              <div className="contact-text">
                <p className="label">Phone</p>
                <a href="tel:+254793643966" className="value phone-link">+254 793 643 966</a>
              </div>
            </div>

            <div className="contact-item">
              <FaMailBulk size={22} className="contact-icon" />
              <div className="contact-text">
                <p className="label">Email</p>
                <a href="mailto:joshneid07@gmail.com" className="value email-link">joshneid07@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Professional Overview */}
          <div className="footer-section about-section">
            <div className="section-title">
              <h3>💼 Professional Profile</h3>
              <div className="title-underline"></div>
            </div>
            
            <div className="about-content">
              <p className="about-text">
                <strong>Full-Stack Engineer | Security Specialist | DevOps Architect</strong>
              </p>
              <p className="about-description">
                Computer Science Graduand at Daystar University with proven expertise in:
              </p>
              <ul className="expertise-list">
                <li>🛡️ Cybersecurity & Penetration Testing</li>
                <li>💻 Full-Stack Web Development (React, Node.js)</li>
                <li>🚀 DevOps & Cloud Infrastructure (Docker, Kubernetes)</li>
                <li>🎯 AI-Powered Solutions & Problem Solving</li>
              </ul>
              <p className="about-tagline">
                Ready to build secure, scalable, and innovative solutions that drive business value.
              </p>
            </div>
          </div>

          {/* Connect & Social */}
          <div className="footer-section social-section">
            <div className="section-title">
              <h3>🌐 Connect & Follow</h3>
              <div className="title-underline"></div>
            </div>
            
            <p className="social-description">
              Let's collaborate and build amazing things together!
            </p>
            
            <div className="social-links">
              <a href="https://github.com/joshua-ndereba" target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub">
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/joshua-ndereba" target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="LinkedIn">
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com/joshua_ndereba" target="_blank" rel="noopener noreferrer" className="social-link twitter" title="Twitter">
                <FaTwitter size={24} />
                <span>Twitter</span>
              </a>
              <a href="https://www.instagram.com/_short._.neid_/" target="_blank" rel="noopener noreferrer" className="social-link instagram" title="Instagram">
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
            </div>

            <div className="cta-section">
              <p className="cta-text">💡 Have a project in mind?</p>
              <a href="mailto:joshneid07@gmail.com" className="cta-button">
                Let's Talk <FiExternalLink size={18} style={{marginLeft: "0.5rem"}} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-credit">
            <p>© 2026 Joshua Ndereba. All rights reserved.</p>
            <p className="build-with">Crafted with <span className="heart">❤️</span> using React & Modern Web Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
