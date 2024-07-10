import React from "react";
import Navbar from "../components/navbar";
import Bgprojects from "../components/bgprojects";
import Footer from "../components/footer";
import Pricingcard from "../components/pricingcard";
import Work from "../components/work";


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
