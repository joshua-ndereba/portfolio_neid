import React from "react";
import "./index.css";
import Home from "./route/home";
import Experience from "./route/experience";
import Project from "./route/project";
import Skills from "./route/skills";
import Contacts from "./route/contacts";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

    </>
    
  );
}

export default App;
