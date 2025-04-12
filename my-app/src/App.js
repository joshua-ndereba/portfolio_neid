import React from "react";
import "./index.css";
import Home from "./route/home";
import About from "./route/about";
import Experience from "./route/experience";
import Project from "./route/project";
import Contacts from "./route/contacts";
import Certifications from "./route/certifications";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
