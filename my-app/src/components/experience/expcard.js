import "./experiencecontentstyles.css"

import React from 'react';


const expcard = (props) => {
  return (
    <div className="exp-card">
    <img className="exp-image" src={props.imgsrc} alt="" />
    <h2 className="exp-title">{props.titie}</h2>
    <div className="exp-details">
    
        <p>{props.text}</p>
       
    </div>

    
</div>
  )
}



export default expcard;