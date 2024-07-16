
import "./form.css"

import React from 'react'

const form = () => {
  return (
    <div className="form" >
      
        <label>name</label>
        <input type="text" placeholder="Enter your name" />
        <label>email</label>
        <input type="email" placeholder="Enter your name" />
        <label>subject</label>
        <input type="text" placeholder="Enter your name" />
        <label>message</label>
        <textarea  rows="10" placeholder="Enter your message" />
        <button className="btn">send</button>
        
        
    </div>

  )
  
  
  
  }


export default form