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
    </div>
  );
};

export default CertificationCard;
