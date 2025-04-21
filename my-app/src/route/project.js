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
      
      <div className="projects-wrapper">
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search projects..."
            value={filter}
            onChange={handleFilterChange}
            className="project-filter"
          />
        </div>

        <div className="projects-grid">
          <Work filter={filter} onProjectClick={handleProjectClick} />
        </div>

        {selectedProject && (
          <div className="project-detail-section">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="project-links">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                View Source
              </a>
              {selectedProject.liveDemo && (
                <a 
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
