import React from "react";
import Navbar from "../components/layout/navbar";
import Form from "../components/contact/form";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
const contacts = () => {
  return <div>
    <Navbar />
    <Bgprojects  heading="Contacts" text="let us have a conversation." />
    <Form />
    <Footer />
  </div>;
  
};

export default contacts;