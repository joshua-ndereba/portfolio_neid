import React from "react";
import Navbar from "../components/layout/navbar";

import Footer from "../components/layout/footer";
import Experincecontent from "../components/experience/experincecontent";
import Bgprojects from "../components/project/bgprojects";
const experience = () => {
  return <div>
    <Navbar />
    <Bgprojects  heading="Experience" text="past experiences and education" />
    <Experincecontent />
    <Footer />
</div>;
  
};

export default experience;