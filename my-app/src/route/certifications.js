import React from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
import CertificationCard from "../components/certificates/certificationcard";
import "../components/certificates/certificatestyles.css";

const certificationsData = [
  {
    title: "Certification 1",
    description: "Description of Certification 1.",
    image: "/path/to/cert1.png", // Replace with the actual path to the image or PDF thumbnail
    link: "https://example.com/cert1",
  },
  {
    title: "Certification 2",
    description: "Description of Certification 2.",
    image: "/path/to/cert2.png", // Replace with the actual path to the image or PDF thumbnail
    link: "https://example.com/cert2",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <div>
      <Navbar />
      <Bgprojects heading="Certifications" text="My professional achievements" />
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            description={cert.description}
            image={cert.image}
            link={cert.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Certifications;
