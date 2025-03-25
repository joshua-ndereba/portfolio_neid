import React, { useState } from "react";
import Navbar from "../components/layout/navbar";
import Bgprojects from "../components/project/bgprojects";
import Footer from "../components/layout/footer";
import Pricingcard from "../components/project/pricingcard";
import Work from "../components/project/work";


const Projects = () => { // Renamed from `projects` to `Projects`
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return <div>
    <Navbar />
    <Bgprojects heading="PROJECTS." text="some of my most recent works" />
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Filter projects..."
        value={filter}
        onChange={handleFilterChange}
        style={{ padding: "10px", fontSize: "1rem" }}
      />
    </div>
    <Work filter={filter} />
    <Pricingcard />
    <Footer />
  </div>;
};

export default Projects;
