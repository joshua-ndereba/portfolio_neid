import React, { useState } from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
import CertificationCard from "../components/certificates/certificationcard";
import "../components/certificates/certificatestyles.css";

<<<<<<< HEAD
=======
// Import images directly
import factorApp from "../assets/certifications/12factorapp.png";
import fundamentalsDevOps from "../assets/certifications/fundamentalsdevops.png";
import prerequisitesDevOps from "../assets/certifications/prerequisitesdevops.png";
import linuxBasics from "../assets/certifications/linuxbasics.png";
import shellScripts from "../assets/certifications/shellscripts.png";
import thmBadges from "../assets/certifications/THM-BADGES.png";

>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
const certificationsData = [
  {
    category: "DevOps",
    items: [
      {
        title: "12 Factor App",
        description: "Modern application architecture principles and cloud-native development practices",
<<<<<<< HEAD
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/12FACTORAPP.pdf",
=======
        image: factorApp,
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
        date: "2023"
      },
      {
        title: "Fundamentals of DevOps",
        description: "Core DevOps practices including CI/CD, automation, and collaboration",
<<<<<<< HEAD
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/FUNDAMENTALSDEVOPS.pdf",
=======
        image: fundamentalsDevOps,
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
        date: "2023"
      },
      {
        title: "Prerequisites for DevOps",
        description: "Essential foundation skills and tools for DevOps engineering",
<<<<<<< HEAD
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/PREREQUISITESDEVOPS.pdf",
=======
        image: prerequisitesDevOps,
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
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
<<<<<<< HEAD
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/LINUXBASICS.pdf",
=======
        image: linuxBasics,
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
        date: "2023"
      },
      {
        title: "Shell Scripting",
        description: "Advanced shell scripting for automation and system management",
<<<<<<< HEAD
        image: "/assets/certifications/pdf-thumbnail.png",
        link: "/assets/certifications/SHELLSCRIPTS.pdf",
=======
        image: shellScripts,
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
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
<<<<<<< HEAD
        image: "/assets/certifications/THM-BADGES.png",
        link: "/assets/certifications/THM-BADGES.png",
=======
        image: thmBadges,
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
        date: "2023"
      }
    ]
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
<<<<<<< HEAD
=======
  const [imageError, setImageError] = useState({});

  const handleImageError = (certId) => {
    console.log(`Failed to load image: ${certId}`);
    setImageError(prev => ({
      ...prev,
      [certId]: true
    }));
  };
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)

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
<<<<<<< HEAD
                    onClick={() => setSelectedCert(cert)}
                    className="cert-card"
                  >
                    <CertificationCard {...cert} />
=======
                    className={`cert-wrapper ${imageError[`${category.category}-${index}`] ? 'cert-error' : ''}`}
                  >
                    <CertificationCard 
                      {...cert}
                      onClick={() => !imageError[`${category.category}-${index}`] && setSelectedCert(cert)}
                      onImageError={() => handleImageError(`${category.category}-${index}`)}
                    />
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
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
<<<<<<< HEAD
              {selectedCert.link.endsWith('.pdf') ? (
                <iframe src={selectedCert.link} title={selectedCert.title} className="pdf-viewer" />
              ) : (
                <img src={selectedCert.link} alt={selectedCert.title} className="cert-image" />
              )}
=======
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-image" />
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Certifications;