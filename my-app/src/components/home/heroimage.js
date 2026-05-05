import "./herostyles.css";
import React from 'react';
import profileImg from "../../assets/6.png";
import bgImage from "../../assets/image2.jpeg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Heroimage = () => {
  const roles = [
    "Full-Stack Developer",
    "Security Engineer",
    "Cloud & DevOps Architect"
  ];

  const skills = ["React", "Node.js", "Docker", "Cybersecurity", "AWS"];

  return (
    <div className="hero">
      <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="background-overlay"></div>
      <div className="hero-container">
        <div className="hero-left">
          <div className="content-wrapper">
            <div className="badge-container">
              <span className="badge">🎓 Computer Science Graduand</span>
            </div>

            <h3 className="intro-text">Hello, I'm</h3>
            <h1 className="name">Joshua Ndereba</h1>
            
            <ul className="roles-list">
              {roles.map((role, index) => (
                <li key={index} className="role-item">
                  <span className="role-bullet">▸</span>
                  {role}
                </li>
              ))}
            </ul>

            <p className="description">
              Transforming ideas into <strong>secure, scalable, and innovative</strong> digital solutions. 
              I specialize in building modern web applications, implementing robust security measures, 
              and architecting cloud infrastructure that powers the future of technology.
            </p>

            <div className="skills-showcase">
              <p className="skills-label">Tech Stack:</p>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="btn-container">
              <Link to="/projects" className="custom-btn btn-primary">
                <span>View My Work</span>
              </Link>
              <Link to="/about" className="custom-btn btn-secondary">
                <span>Learn More</span>
              </Link>
              <Link to="/contacts" className="custom-btn btn-outline">
                <span>Get In Touch</span>
              </Link>
            </div>

            <div className="social-links">
              <a href="https://github.com/joshua-ndereba" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/joshua-ndereba" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="mailto:joshneid07@gmail.com" className="social-link" title="Email">
                <FaEnvelope className="social-icon" />
              </a>
            </div>

            <div className="availability-badge">
              <span className="status-dot"></span>
              <span className="status-text">Available for new opportunities</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-container">
            <div className="profile-wrapper">
              <div className="profile-glow"></div>
              <img src={profileImg} alt="Joshua Ndereba - Full-Stack Developer & Security Engineer" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;

