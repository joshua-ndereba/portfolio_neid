import "./experiencecontentstyles.css"
import Experiencedata from "./experiencedata"
import Expcard from "./expcard"
import React from 'react'
import { NavLink } from "react-router-dom"

const experincecontent = () => {
  return (
    <div className="education">
      <h1>Educational Background</h1>
      <div className="educationContainer">
        {Experiencedata.map((val, ind) => (
          <Expcard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
          />
        ))}
      </div>

      <div className="professional-section">
        <h1>Professional Experience & Core Competencies</h1>
        <div className="skills-container">
          <div className="skill-card cybersecurity">
            <h3>🛡️ Cybersecurity Specialist</h3>
            <p>Proven expertise in threat detection, penetration testing, and system hardening. Developed <strong>DERE (Driver)</strong>—an AI-powered SIEM solution for advanced threat investigation. Hands-on experience with Linux hardening, CLI-based security auditing, and vulnerability remediation frameworks.</p>
          </div>

          <div className="skill-card fullstack">
            <h3>💻 Full-Stack Engineer</h3>
            <p>Built production-grade applications including <strong>Tuskize</strong> (AI-powered accessibility app for speech disfluency), <strong>ExpressBus</strong> (ticketing platform with real-time tracking), and responsive web applications. Expert in React, Node.js, database design, and scalable API architecture.</p>
          </div>

          <div className="skill-card devops">
            <h3>🚀 DevOps & Cloud Infrastructure</h3>
            <p>Proficient in Docker, Kubernetes, CI/CD pipelines, and containerized deployments. Experienced with Git workflows, infrastructure automation, and environment-agnostic deployment strategies. Pursuing AWS Cloud Engineering certification.</p>
          </div>

          <div className="skill-card problem-solver">
            <h3>🎯 Strategic Problem-Solver</h3>
            <p>Consistently identify bottlenecks, architect scalable solutions, and deliver results independently. Strong track record of turning complex requirements into maintainable, high-performance code. Comfortable working across the entire technology stack.</p>
          </div>
        </div>

        <div className="cta-section">
          <NavLink to="/projects" className="btn">View Projects</NavLink>
          <NavLink to="/certifications" className="btn">Certifications</NavLink>
        </div>
      </div>
    </div>
  );
};

export default experincecontent;