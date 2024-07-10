import "./workcardstyles.css";
import Workcard from "./workcard";
import workcarddata from "./workcarddata"
import React from 'react';


const work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">projects</h1>
        <div className="project-container">
            {workcarddata.map((val, ind) => {
                return(
                    <Workcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                
                );
            })}

        </div>
    </div>
           
  )
}



export default work;