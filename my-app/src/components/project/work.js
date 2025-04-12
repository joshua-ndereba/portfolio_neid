import "./workcardstyles.css";
import Workcard from "./workcard";
import workcarddata from "./workcarddata";
import React from "react";

const Work = ({ filter, onProjectClick }) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workcarddata
          .filter((val) => val.title.toLowerCase().includes(filter.toLowerCase()))
          .map((val, ind) => (
            <div key={ind} onClick={() => onProjectClick(val)}>
              <Workcard
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                showNote={true} // Pass a prop to show the faint note
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Work;