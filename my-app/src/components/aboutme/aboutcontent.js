import "./aboutcontent.css";

import React from 'react';
import { Link } from "react-router-dom";

import stack1 from "../../assets/4.png";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className="about-title">WHO AM I?</h1>

        <div className="about-text">
          <div className="intro-section">
            <p>
              I'm <strong>Joshua Ndereba</strong>, a passionate Computer Science student at <strong>Daystar University</strong>
              with an insatiable curiosity for building technology that makes a real difference. My journey into tech began
              not in a classroom, but through countless late nights solving problems I encountered in everyday life—from
              automating tedious tasks to building tools that help people communicate more effectively.
            </p>
          </div>

          <div className="journey-section">
            <h3 className="section-heading">🚀 My Journey</h3>
            <p>
              What drives me is the intersection of <strong>security, scalability, and user experience</strong>. I've evolved
              from writing my first "Hello World" to architecting full-stack applications that handle real-world complexity.
              My expertise spans <strong>software engineering</strong>, <strong>cybersecurity</strong>, and <strong>DevOps</strong>—
              three pillars that I believe are essential for building modern, resilient systems.
            </p>
          </div>

          <div className="technical-section">
            <h3 className="section-heading">💻 Technical Expertise</h3>
            <p>
              I specialize in <strong>full-stack development</strong> with React, Node.js, and modern frameworks, creating
              responsive interfaces that users love. My <strong>mobile development</strong> experience includes Flutter and
              React Native, where I've built apps that prioritize accessibility and performance. On the security front, I'm
              deeply invested in <strong>penetration testing</strong>, <strong>threat detection systems</strong>, and
              implementing security best practices from the ground up.
            </p>
            <p>
              Notable achievements include:
            </p>
            <ul className="achievements-list">
              <li>🏔️ <strong>Tuskize</strong>—An AI-powered voice inclusivity app that helps people with speech disfluencies communicate confidently</li>
              <li>🛡️ <strong>DERE (Driver)</strong>—A comprehensive SIEM tool leveraging AI for threat detection and investigation</li>
              <li>🏥 <strong>Medical Records System</strong>—Built with VB.NET, streamlining healthcare data management</li>
              <li>🚌 <strong>Bus Ticketing Platform</strong>—A seamless booking system with real-time tracking</li>
              <li>🎨 <strong>This Portfolio</strong>—A showcase of modern web design with 3D effects and animations</li>
            </ul>
          </div>

          <div className="approach-section">
            <h3 className="section-heading">🎯 My Approach</h3>
            <p>
              I believe in <strong>clean, maintainable code</strong> and <strong>agile development practices</strong>.
              Every project I touch is an opportunity to learn something new and push the boundaries of what I thought
              was possible. I'm a strong advocate for <strong>continuous learning</strong>—currently pursuing certifications
              in <strong>AWS Cloud Engineering</strong>, <strong>CI/CD pipelines</strong>, and <strong>advanced penetration testing</strong>.
            </p>
          </div>

          <div className="community-section">
            <h3 className="section-heading">🌍 Beyond Code</h3>
            <p>
              I'm actively involved in tech communities, participating in hackathons and contributing to open-source projects.
              I believe technology should be <strong>inclusive and accessible to everyone</strong>, which is why many of my
              projects focus on solving real problems for underserved communities—like Tuskize, which addresses the unique
              challenges faced by people with stammering.
            </p>
          </div>

          <div className="future-section">
            <h3 className="section-heading">🔮 What's Next?</h3>
            <p>
              I'm currently seeking opportunities to collaborate on <strong>innovative projects</strong> that challenge me
              to grow both technically and personally. Whether it's building the next generation of secure applications,
              optimizing infrastructure for scale, or creating tools that empower users, I'm ready to bring my
              <strong> passion, expertise, and relentless curiosity</strong> to your team.
            </p>
          </div>

          <div className="values-section">
            <h3 className="section-heading">💡 Core Values</h3>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-icon">🛡️</span>
                <h4>Security First</h4>
                <p>Building trust through robust, secure systems</p>
              </div>
              <div className="value-card">
                <span className="value-icon">🎨</span>
                <h4>User-Centric Design</h4>
                <p>Creating intuitive experiences that delight</p>
              </div>
              <div className="value-card">
                <span className="value-icon">🚀</span>
                <h4>Continuous Innovation</h4>
                <p>Always learning, always improving</p>
              </div>
              <div className="value-card">
                <span className="value-icon">🤝</span>
                <h4>Collaborative Spirit</h4>
                <p>Great things are built together</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/contacts">
          <button className="btn cta-btn">Let's Build Something Amazing Together</button>
        </Link>

        <div className="resume-section">
          <h2 className="resume-heading">📄 My Resume</h2>
          <p className="resume-description">
            Take a detailed look at my professional journey, skills, and accomplishments.
          </p>
          <div className="resume-container">
            <iframe
              src="/assets/resume/joshuaresume.pdf"
              width="100%"
              height="600px"
              title="Joshua Ndereba's Professional Resume"
              className="resume-iframe"
            />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="top">
            <img src={stack1} alt="Joshua's Tech Stack" className="tech-stack-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
