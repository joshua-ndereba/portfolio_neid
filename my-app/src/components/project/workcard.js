import "./workcardstyles.css";
import React from "react";

const Workcard = ({ imgsrc, title, text, technologies = [], githubUrl, liveDemo, description }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imgsrc} alt={title || 'Project'} />
        {description && (
          <div className="overlay">
            <div className="overlay-content">
              <h3>{title}</h3>
              <p className="overlay-description">{description}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-text">{text}</p>
        
        {technologies.length > 0 && (
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
              View Code
            </a>
          )}
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workcard;