import "./pricingcardsyles.css";

import React from 'react';
import { Link } from "react-router-dom";
const pricingcard = () => {
  return (
   <div className="pricing">
    <div className="card_container">
        <div className="card">
            <h3>- bASIC -</h3>
            <span className="bar"></span>
            <p className="btc"> $100</p>
            <p>- 3 days -</p>
            <p>- 3 pages -</p>
            <p>- featured -</p>
            <p>- responsive design -</p>
            <Link to ="/contacts" className="btn">
                GET DETAILS
            </Link>


        </div>

        <div className="card">
            <h3>- bASIC -</h3>
            <span className="bar"></span>
            <p className="btc"> $200</p>
            <p>- 3 days -</p>
            <p>- 3 pages -</p>
            <p>- featured -</p>
            <p>- responsive design -</p>
            <Link to ="/contacts" className="btn">
                GET DETAILS
            </Link>
            

        </div>

        <div className="card">
            <h3>- bASIC -</h3>
            <span className="bar"></span>
            <p className="btc"> $300</p>
            <p>- 3 days -</p>
            <p>- 3 pages -</p>
            <p>- featured -</p>
            <p>- responsive design -</p>
            <Link to ="/contacts" className="btn">
                GET DETAILS
            </Link>
            

        </div>
    </div>
   </div>
  )
}

export default pricingcard;