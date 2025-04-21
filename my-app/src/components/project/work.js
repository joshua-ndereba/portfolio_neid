import "./workcardstyles.css";
import Workcard from "./workcard";
import workcarddata from "./workcarddata";
import React from "react";

const Work = ({ filter = "", onProjectClick = () => {} }) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workcarddata
          .filter((val) => (
            val.title?.toLowerCase().includes(filter.toLowerCase()) || 
            val.text?.toLowerCase().includes(filter.toLowerCase())
          ))
          .map((project, index) => (
            <div key={index} onClick={() => onProjectClick(project)}>
              <Workcard {...project} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Work;