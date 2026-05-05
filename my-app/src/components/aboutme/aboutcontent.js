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
              I'm <strong>Joshua Ndereba</strong>, a Computer Science graduand at <strong>Daystar University</strong> 
              awaiting my degree, with an insatiable curiosity for building technology that makes a real difference. 
              With years of hands-on experience in full-stack development, cybersecurity, and DevOps, I've moved beyond 
              theory into proven, production-ready applications. My journey began not in a classroom, but through countless 
              late nights solving real-world problems—from automating tedious tasks to architecting AI-powered solutions 
              that help people communicate more effectively. Now, I'm ready to bring this expertise to forward-thinking 
              organizations ready to innovate.
            </p>
          </div>

          <div className="journey-section">
            <h3 className="section-heading">🚀 Professional Evolution</h3>
            <p>
              What drives me is the intersection of <strong>security, scalability, and user experience</strong>. From my 
              first "Hello World" to architecting full-stack applications handling real-world complexity, I've built a 
              proven track record of delivering results. My expertise spans <strong>full-stack development</strong>, 
              <strong>cybersecurity</strong>, and <strong>DevOps</strong>—three pillars essential for building modern, 
              resilient systems. I'm not just a developer; I'm a problem-solver who bridges the gap between vision and 
              execution, delivering products that scale.
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
            <h3 className="section-heading">🎯 Why I Stand Out</h3>
            <p>
              I don't just write code—I architect solutions. With a focus on <strong>clean, maintainable architecture</strong> 
              and <strong>agile development practices</strong>, every project is an opportunity to exceed expectations. My proven 
              ability to deliver production-grade applications, combined with continuous upskilling in <strong>AWS Cloud Engineering</strong>, 
              <strong>CI/CD automation</strong>, and <strong>advanced penetration testing</strong>, makes me a rare combination: 
              technically deep yet business-savvy, security-conscious yet user-focused.
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
            <h3 className="section-heading">🔮 Ready for Impact</h3>
            <p>
              As I complete my degree and step into the professional world, I'm actively seeking opportunities to collaborate 
              on <strong>innovative projects</strong> that challenge me to grow and create tangible value. Whether it's 
              architecting secure, scalable applications, optimizing infrastructure for enterprise-grade performance, or 
              creating tools that empower millions of users, I bring <strong>proven expertise, relentless drive, and a 
              commitment to excellence</strong> to every engagement. I'm ready to move from academic achievement to real-world impact.
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
