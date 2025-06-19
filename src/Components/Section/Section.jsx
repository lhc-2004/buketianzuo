// Section.jsx
import React from "react";
import Product from "../Product/Product.jsx";
import "./section.css";

const Section = ({ id, title, description, products }) => (
  <div id={id} className="section">
    <div className="section-header">
      <h1 className="section-title">{title}</h1>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>

    <div className="section-products">
      {products.map((product, index) => {
        // prepend Vite’s base URL so it becomes /buketianzuo/menuDataPic/…
        const imgSrc = import.meta.env.BASE_URL + product.image;
        return (
          <Product
            key={index}
            image={imgSrc}
            name={product.name}
            description={product.description}
            tempChoice={product.tempChoice}
          />
        );
      })}
    </div>
  </div>
);

export default Section;
