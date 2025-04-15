import React, { useState } from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
import CertificationCard from "../components/certificates/certificationcard";
import "../components/certificates/certificatestyles.css";

const certificationsData = [
  {
    category: "DevOps",
    items: [
      {
        title: "12 Factor App",
        description: "Modern application architecture principles and cloud-native development practices",
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/12FACTORAPP.pdf",
        date: "2023"
      },
      {
        title: "Fundamentals of DevOps",
        description: "Core DevOps practices including CI/CD, automation, and collaboration",
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/FUNDAMENTALSDEVOPS.pdf",
        date: "2023"
      },
      {
        title: "Prerequisites for DevOps",
        description: "Essential foundation skills and tools for DevOps engineering",
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/PREREQUISITESDEVOPS.pdf",
        date: "2023"
      }
    ]
  },
  {
    category: "System Administration",
    items: [
      {
        title: "Linux Basics",
        description: "Command-line proficiency and system administration fundamentals",
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/LINUXBASICS.pdf",
        date: "2023"
      },
      {
        title: "Shell Scripting",
        description: "Advanced shell scripting for automation and system management",
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/SHELLSCRIPTS.pdf",
        date: "2023"
      }
    ]
  },
  {
    category: "Cybersecurity",
    items: [
      {
        title: "TryHackMe Achievements",
        description: "Hands-on cybersecurity challenges and penetration testing",
        image: "/assets/certifications/THM-BADGES.png",
        link: "/assets/certifications/THM-BADGES.png",
        date: "2023"
      }
    ]
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterCertifications = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Navbar />
      <Bgprojects heading="Certifications" text="Professional Achievements & Skills" />
      
      <div className="certification-filters">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => filterCertifications('all')}
        >
          All
        </button>
        {certificationsData.map(category => (
          <button
            key={category.category}
            className={`filter-btn ${activeCategory === category.category ? 'active' : ''}`}
            onClick={() => filterCertifications(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="certifications-container">
        {certificationsData.map(category => (
          (activeCategory === 'all' || activeCategory === category.category) && (
            <div key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="cert-grid">
                {category.items.map((cert, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCert(cert)}
                    className="cert-card"
                  >
                    <CertificationCard {...cert} />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedCert(null)}>&times;</button>
            <h3>{selectedCert.title}</h3>
            <p className="cert-date">{selectedCert.date}</p>
            <p className="cert-description">{selectedCert.description}</p>
            <div className="cert-preview">
              {selectedCert.link.endsWith('.pdf') ? (
                <iframe src={selectedCert.link} title={selectedCert.title} className="pdf-viewer" />
              ) : (
                <img src={selectedCert.link} alt={selectedCert.title} className="cert-image" />
              )}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Certifications;