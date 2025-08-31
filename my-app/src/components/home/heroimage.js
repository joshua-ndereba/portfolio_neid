import "./herostyles.css";
import React from 'react';
import profileImg from "../../assets/6.png";
import bgImage from "../../assets/image2.jpeg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Heroimage = () => {
  const roles = ["Frontend Developer", "Security Analyst", "DevOps Engineer"];

  return (
    <div className="hero">
      <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="background-overlay"></div>
      <div className="hero-container">
        <div className="hero-left">
          <div className="content-wrapper">
            <h3 className="intro-text">Hello, I'm</h3>
            <h1 className="name">Joshua Ndereba</h1>
            <br />
            
            <ul className="roles-list">
              {roles.map((role, index) => (
                <li key={index} className="role-item">{role}</li>
              ))}
            </ul>

            <p className="description">
              Passionate about creating secure, scalable, and beautiful web applications.
              Specializing in modern web technologies and cloud infrastructure.
            </p>
            <br />
            <br />

            <div className="btn-container">
              <Link to="/experience" className="custom-btn btn-primary">
                <span>View Experience</span>
              </Link>
              <Link to="/projects" className="custom-btn btn-secondary">
                <span>My Projects</span>
              </Link>
              <Link to="/contacts" className="custom-btn btn-outline">
                <span>Contact Me</span>
              </Link>
            </div>

            <div className="social-links">
              <a href="https://github.com/joshua-ndereba" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-container">
            <div className="profile-wrapper">
              <img src={profileImg} alt="Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;

