import React from "react";

import Navbar from "../components/layout/navbar";
import Aboutcontent from "../components/aboutme/aboutcontent";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";

const about = () => {
  return <div>
    <Navbar />
    <Bgprojects  heading="About" text="list of all im skiled in" image="ing" />
    <Aboutcontent />
    <Footer />
</div>;
};
export default about;