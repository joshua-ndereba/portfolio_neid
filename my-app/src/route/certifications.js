import React from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
import CertificationCard from "../components/certificates/certificationcard";
import "../components/certificates/certificatestyles.css";

const certificationsData = [
  {
    title: "12 Factor App",
    description: "Certification on the principles of building scalable and maintainable applications.",
    image: "/assets/certifications/pdf-thumbnail.png", // Placeholder thumbnail for PDF
    link: "/assets/certifications/12FACTORAPP.pdf",
  },
  {
    title: "Fundamentals of DevOps",
    description: "Certification in the foundational concepts of DevOps.",
    image: "/assets/certifications/pdf-thumbnail.png", // Placeholder thumbnail for PDF
    link: "/assets/certifications/FUNDAMENTALSDEVOPS.pdf",
  },
  {
    title: "Linux Basics",
    description: "Certification in basic Linux commands and system management.",
    image: "/assets/certifications/pdf-thumbnail.png", // Placeholder thumbnail for PDF
    link: "/assets/certifications/LINUXBASICS.pdf",
  },
  {
    title: "Prerequisites for DevOps",
    description: "Certification covering the prerequisites for DevOps practices.",
    image: "/assets/certifications/pdf-thumbnail.png", // Placeholder thumbnail for PDF
    link: "/assets/certifications/PREREQUISITESDEVOPS.pdf",
  },
  {
    title: "Shell Scripting",
    description: "Certification in writing and managing shell scripts.",
    image: "/assets/certifications/pdf-thumbnail.png", // Placeholder thumbnail for PDF
    link: "/assets/certifications/SHELLSCRIPTS.pdf",
  },
  {
    title: "TryHackMe Badges",
    description: "Recognition for completing various TryHackMe challenges.",
    image: "/assets/certifications/THM-BADGES.png", // PNG certificate
    link: "/assets/certifications/THM-BADGES.png",
  },
  {
    title: "TryHackMe: DZHVTJDH2",
    description: "Certification for completing the DZHVTJDH2 challenge on TryHackMe.",
    image: "/assets/certifications/pdf-thumbnail.png", // Placeholder thumbnail for PDF
    link: "/assets/certifications/THM-DZHVTJDH2.pdf",
  },
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
