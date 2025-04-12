import React, { useState } from "react";
import Navbar from "../components/layout/navbar";
import Bgprojects from "../components/project/bgprojects";
import Footer from "../components/layout/footer";
import Work from "../components/project/work";

const Projects = () => {
  const [filter, setFilter] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <Navbar />
      <Bgprojects heading="PROJECTS." text="Some of my most recent works" />
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Filter projects..."
          value={filter}
          onChange={handleFilterChange}
          style={{ padding: "10px", fontSize: "1rem" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        {/* Preview Area */}
        <div style={{ flex: "2", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          <Work filter={filter} onProjectClick={handleProjectClick} />
        </div>

        {/* Documentation Area */}
        <div style={{ flex: "1", padding: "20px", background: "#1a1919", color: "#fff", borderRadius: "8px" }}>
          {selectedProject ? (
            <>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.text}</p>
              <a
                href={selectedProject.view}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "yellow", textDecoration: "underline" }}
              >
                View Source Code
              </a>
            </>
          ) : (
            <p>Select a project to see details and source code.</p>
          )}
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center", margin: "20px 0", color: "#fff" }}>
          Certifications
        </h2>
        <ul style={{ listStyleType: "none", padding: "0", textAlign: "center" }}>
          <li>
            <a
              href="https://example.com/cert1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "yellow", textDecoration: "underline" }}
            >
              Certification 1
            </a>
          </li>
          <li>
            <a
              href="https://example.com/cert2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "yellow", textDecoration: "underline" }}
            >
              Certification 2
            </a>
          </li>
          {/* Add more certifications as needed */}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
