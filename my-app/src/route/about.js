import React, { useState } from "react";

import Navbar from "../components/layout/navbar";
import Aboutcontent from "../components/aboutme/aboutcontent";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return <div>
    <Navbar />
    <Bgprojects heading="About" text="list of all im skilled in" image="ing" />
    <Aboutcontent />
    <button onClick={toggleShowMore}>
      {showMore ? "Show Less" : "Show More"}
    </button>
    {showMore && <div>Additional interactive content goes here!</div>}
    <Footer />
  </div>;
};
export default About;