import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Logo */}
      <div className="logo-section">
        <Link to="/" aria-label="Go to home page">
          <img
            src="/FancyBUKELogo.png"
            alt="BUKE Logo"
            className="footer-navbar-logo"
          />
        </Link>
      </div>

      {/* Subparts */}
      <div className="footer-content">
        <div className="footer-column">
          <h3>Address</h3>
          <p>123 Example St</p>
          <p>City, Country</p>
          <p>Email: example@buke.com</p>
        </div>
        <div className="footer-column">
          <h3>Menu</h3>
          <p>Custom Cake</p>
          <p>Dessert</p>
          <p>Tea</p>
          <p>Coffee</p>
          <p>Rice Roll</p>
        </div>
        <div className="footer-column">
          <h3>Info</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Donation</p>
        </div>
        <div className="footer-column">
          <h3>Operation Hour</h3>
          <p>Mon-Fri: 9am - 9pm</p>
          <p>Sat-Sun: 10am - 8pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved</p>
      </div>
      
    </div>
  );
};

export default Footer;
