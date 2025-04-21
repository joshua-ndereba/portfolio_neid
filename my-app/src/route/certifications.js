import React, { useState } from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Bgprojects from "../components/project/bgprojects";
import CertificationCard from "../components/certificates/certificationcard";
import "../components/certificates/certificatestyles.css";

// Import images directly
import factorApp from "../assets/certifications/12factorapp.png";
import fundamentalsDevOps from "../assets/certifications/fundamentalsdevops.png";
import prerequisitesDevOps from "../assets/certifications/prerequisitesdevops.png";
import linuxBasics from "../assets/certifications/linuxbasics.png";
import shellScripts from "../assets/certifications/shellscripts.png";
import thmBadges from "../assets/certifications/THM-BADGES.png";

const certificationsData = [
  {
    category: "DevOps",
    items: [
      {
        title: "12 Factor App",
        description: "Modern application architecture principles and cloud-native development practices",
        image: factorApp,
        date: "2023"
      },
      {
        title: "Fundamentals of DevOps",
        description: "Core DevOps practices including CI/CD, automation, and collaboration",
        image: fundamentalsDevOps,
        date: "2023"
      },
      {
        title: "Prerequisites for DevOps",
        description: "Essential foundation skills and tools for DevOps engineering",
        image: prerequisitesDevOps,
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
        image: linuxBasics,
        date: "2023"
      },
      {
        title: "Shell Scripting",
        description: "Advanced shell scripting for automation and system management",
        image: shellScripts,
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
        image: thmBadges,
        date: "2023"
      }
    ]
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [imageError, setImageError] = useState({});

  const handleImageError = (certId) => {
    console.log(`Failed to load image: ${certId}`);
    setImageError(prev => ({
      ...prev,
      [certId]: true
    }));
  };

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
                    className={`cert-wrapper ${imageError[`${category.category}-${index}`] ? 'cert-error' : ''}`}
                  >
                    <CertificationCard 
                      {...cert}
                      onClick={() => !imageError[`${category.category}-${index}`] && setSelectedCert(cert)}
                      onImageError={() => handleImageError(`${category.category}-${index}`)}
                    />
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
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-image" />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Certifications;