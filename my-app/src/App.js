import React from "react";
import "./index.css";
import Home from "./route/home";
import About from "./route/about";
import Experience from "./route/experience";
import Project from "./route/project";

import Contacts from "./route/contacts";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      
      
    </>
    
  );
}

export default App;
