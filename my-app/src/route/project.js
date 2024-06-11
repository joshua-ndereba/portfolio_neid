import React from "react";
import Navbar from "../components/navbar";
import Bgprojects from "../components/bg_projects";
import Footer from "../components/footer";

const projects = () => {
  return <div>
    <Navbar />
    <Bgprojects heading="PROJECTS." text="some of my most recent works" />
    <Footer />
</div>;
};

export default projects;