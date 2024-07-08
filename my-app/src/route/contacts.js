import React from "react";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import Bgprojects from "../components/bgprojects";
const contacts = () => {
  return <div>
    <Navbar />
    <Bgprojects  heading="Contacts" text="let us have a conversation." />
    <Footer />
  </div>;
  
};

export default contacts;