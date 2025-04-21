import "./workcardstyles.css";
import React from "react";

const Workcard = (props) => {
  return (
    <div className="project-card">
      <div className="image-container">
<<<<<<< HEAD
        <img src={props.imgsrc} alt="" />
        {props.showNote && (
          <div className="overlay-note">Press here to see details</div>
        )}
      </div>
      <h2 className="project-title">{props.title}</h2>
      <div className="project-label">Project Details</div> {/* Label Heading */}
      <div className="pro-details">
        <p>{props.text}</p>
=======
        <img src={props.imgsrc} alt={props.title} />
        <div className="overlay">
          <div className="overlay-content">
            <h3>{props.title}</h3>
            <p className="overlay-description">{props.text}</p>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
          <p>{props.text}</p>
          {props.technologies && (
            <div className="tech-stack">
              {props.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}
        </div>
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
      </div>
    </div>
  );
};

export default Workcard;