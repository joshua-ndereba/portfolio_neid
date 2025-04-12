import React from "react";
import "./certificatestyles.css";

const CertificationCard = ({ title, description, image, link }) => {
  return (
    <div className="cert-card">
      <div className="cert-image-container">
        <img src={image} alt={title} className="cert-image" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        View Certification
      </a>
    </div>
  );
};

export default CertificationCard;
