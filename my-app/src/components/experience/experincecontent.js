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
        <h1>Professional Experience & Skills</h1>
        <div className="skills-container">
          <div className="skill-card cybersecurity">
            <h3>Cybersecurity Enthusiast</h3>
            <p>Actively building cybersecurity skills, with a focus on vulnerability assessment, ethical hacking, and system hardening. Seeking real-world exposure through a dedicated 3-month attachment. Hands-on with Linux systems and CLI-based debugging workflows.</p>
          </div>

          <div className="skill-card fullstack">
            <h3>Full-Stack Web Developer</h3>
            <p>Developed <strong>ExpressBus</strong>, a ticketing and schedule management platform using modern frontend frameworks and backend design patterns. Comfortable with API integration, database design, and clean UI/UX presentation.</p>
          </div>

          <div className="skill-card devops">
            <h3>Version Control & DevOps Basics</h3>
            <p>Efficient with Git and GitHub workflows, including branching, rebasing, conflict resolution, and disaster recovery. Uses CLI and GUI tools for full control over code lifecycle.</p>
          </div>

          <div className="skill-card problem-solver">
            <h3>Problem Solver & Continuous Learner</h3>
            <p>Solves technical roadblocks independently and efficiently. Consistently looking to improve code quality, optimize workflows, and build real-world projects to reinforce academic knowledge.</p>
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