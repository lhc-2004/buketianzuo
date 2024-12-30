import "./product.css"

const Product = ({ image, name, description }) => (
  <div className="product">
    <div className="border">
      <img src={image} alt={`Image of ${name}`} className="product-image" />
    </div>
    <h3 className="product-name">{name}</h3>
    <p className="product-description">{description}</p>
  </div>
);

export default Product;

  