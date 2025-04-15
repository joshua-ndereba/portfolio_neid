import "./aboutcontent.css";

import React from 'react';
import { Link } from "react-router-dom";

import stack1 from "../../assets/4.png";
import stack2 from "../../assets/image8.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <div className="about-text">
          <p>
            I'm <strong>Joshua Ndereba</strong>, a Computer Science student at <strong>Daystar University</strong>. 
            I'm passionate about creating secure, efficient, and impactful technology solutions, with expertise in 
            <strong> software engineering</strong>, <strong>cybersecurity</strong>, and <strong>DevOps</strong>.
          </p>
          
          <p>
            My technical journey includes hands-on experience in <strong>full-stack development</strong>, 
            <strong> mobile app design</strong>, and <strong>infrastructure automation</strong>. Notable projects: 
            <strong> Flutter hiking app</strong>, <strong>VB.NET medical records system</strong>, 
            <strong> bus ticketing platform</strong>, and this <strong>portfolio</strong>.
          </p>
          
          <p>
            I pride myself on clean code practices and rapid learning ability. Currently pursuing certifications in 
            <strong> cloud engineering</strong>, <strong>CI/CD</strong>, and <strong>penetration testing</strong>, 
            while staying active in tech communities and hackathons.
          </p>
          
          <p>
            Looking to bring my skills and enthusiasm to innovative projects and teams.
          </p>
        </div>
        <Link to="/contacts">
          <button className="btn">Contact Me</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="top">
            <img src={stack1} alt="Tech stack 1" />
          </div>
          <div className="bottom">
            <img src={stack2} alt="Tech stack 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
