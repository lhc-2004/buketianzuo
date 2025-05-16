// Section.jsx
// Renders a titled section with optional description and a list of products
import React from "react";
import Product from "../Product/Product.jsx";
import "./section.css";

const Section = ({ id, title, description, products }) => (
  <div id={id} className="section">
    {/* Section header with title and optional description */}
    <div className="section-header">
      <h1 className="section-title">{title}</h1>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>

    {/* Grid of Product components */}
    <div className="section-products">
      {products.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          name={product.name}
          description={product.description}
          tempChoice={product.tempChoice}
        />
      ))}
    </div>
  </div>
);

export default Section;
