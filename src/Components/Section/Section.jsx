import Product from "../Product/Product.jsx";
import "./section.css";

const Section = ({ id, title, description, products }) => (
  <div id={id} className="section">
    <div className="section-header"> 
      <h1 className="section-title">{title}</h1>
      {description && <p className="section-description">{description}</p>}
    </div>
    <div className="section-products">
      {products.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  </div>
);

export default Section;
