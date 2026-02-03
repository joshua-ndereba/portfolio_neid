import React from "react";
import Navbar from "../components/layout/navbar";
import Form from "../components/contact/form";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
const Contacts = () => {
  return <div>
    <Navbar />
    <Bgprojects
      heading="Get In Touch"
      text="Let's collaborate on something amazing together"
    />
    <Form />
    <Footer />
  </div>;

};

export default Contacts;