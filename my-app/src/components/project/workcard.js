import "./workcardstyles.css";
import React from "react";

const Workcard = (props) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={props.imgsrc} alt="" />
        {props.showNote && (
          <div className="overlay-note">Press here to see details</div>
        )}
      </div>
      <h2 className="project-title">{props.title}</h2>
      <div className="project-label">Project Details</div> {/* Label Heading */}
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Workcard;