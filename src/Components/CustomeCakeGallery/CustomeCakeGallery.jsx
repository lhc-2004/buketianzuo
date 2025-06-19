import React from "react";
import "./customeCakeGallery.css";
import { customeCakeGalleryImages } from "../../info";

const CustomeCakeGallery = () => {
  return (
    <div className="cake-gallery-container">
      <h2 className="gallery-title">
        <span>Our Creations</span>
      </h2>
      <div className="cake-gallery-grid">
        {customeCakeGalleryImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Cake ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomeCakeGallery;
