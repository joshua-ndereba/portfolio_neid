<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import "./certificatestyles.css";

const CertificationCard = ({ title, description, image, onImageError, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="cert-card" onClick={onClick}>
      <div className={`cert-image-container ${isLoading ? 'loading' : ''}`}>
        <img
          src={image}
          alt={title}
          className="cert-image"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            onImageError && onImageError();
          }}
        />
        {isLoading && <div className="loading-spinner"></div>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="view-cert">Click to view certificate</div>
>>>>>>> d1dded0 ( reinitialized git repo lost all my previous logs, added on mobile responsiveness)
    </div>
  );
};

export default CertificationCard;
