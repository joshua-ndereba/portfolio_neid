import React from "react";

import Navbar from "../components/layout/navbar";
import Aboutcontent from "../components/aboutme/aboutcontent";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";

const About = () => {
  return <div>
    <Navbar />
    <Bgprojects
      heading="About Me"
      text="Discover my journey, skills, and what drives me"
      image="ing"
    />
    <Aboutcontent />
    <Footer />
  </div>;
};
export default About;