import React from "react";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import Experincecontent from "../components/experincecontent";
import Bgprojects from "../components/bgprojects";
const experience = () => {
  return <div>
    <Navbar />
    <Bgprojects  heading="Experience" text="past experiences and education" />
    <Experincecontent />
    <Footer />
</div>;
  
};

export default experience;