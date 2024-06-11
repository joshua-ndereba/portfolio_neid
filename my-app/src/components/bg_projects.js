import "./bg_project_styles.css";


import React, { Component } from 'react';

class bg_projects extends Component {
  render() {
  return (
    <div className="bg">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
};

export default bg_projects;