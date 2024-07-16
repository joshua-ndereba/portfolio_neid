import React from "react";
import Navbar from "../components/layout/navbar";
import Bgprojects from "../components/project/bgprojects";
import Footer from "../components/layout/footer";
import Pricingcard from "../components/project/pricingcard";
import Work from "../components/project/work";


const projects = () => {
  return <div>
    <Navbar />
    <Bgprojects heading="PROJECTS." text="some of my most recent works" />
    <Work />
    <Pricingcard />
    
    <Footer />
</div>;
};

export default projects;
