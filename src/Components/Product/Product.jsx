// Product.jsx
// Renders a single product card with image, name, description, and temperature choice
import React from "react";
import "./product.css";

const Product = ({ image, name, description, tempChoice }) => (
  <div className="product">
    {/* Image with decorative border and hover effect */}
    <div className="product-border">
      <img
        src={image}
        alt={`Image of ${name}`}
        className="product-image"
      />
    </div>

    {/* Product title */}
    <h3 className="product-name">{name}</h3>

    {/* Brief description */}
    <p className="product-description">{description}</p>

    {/* Temperature choice or additional info */}
    <p className="temp-choice">{tempChoice}</p>
  </div>
);

export default Product;