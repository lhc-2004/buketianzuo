// Footer.jsx
import { Link, useNavigate } from "react-router-dom";
import { footerLogo } from "../../info";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) =>
    navigate("/menu", { state: { sectionId } });

  return (
    <div className="footer-container">
      <div className="logo-section">
        <Link to="/" aria-label="Go to home page" onClick={() => window.scrollTo(0, 0)}>
          <img src={footerLogo} alt="BUKE Logo" className="footer-navbar-logo" />
        </Link>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>Address</h3>
          <p>123 Example St</p>
          <p>City, Country</p>
          <p>Email: example@buke.com</p>
        </div>

        <div className="footer-column">
          <h3>
            <Link to="/menu" onClick={() => window.scrollTo(0, 0)}>
              Menu
            </Link>
          </h3>
          <p>
            <span className="footer-link" onClick={() => handleSectionNavigation("cake-section")}>
              Custom Cake
            </span>
          </p>
          <p>
            <span className="footer-link" onClick={() => handleSectionNavigation("bread-section")}>
              Bread
            </span>
          </p>
          <p>
            <span className="footer-link" onClick={() => handleSectionNavigation("tea-section")}>
              Tea
            </span>
          </p>
          <p>
            <span className="footer-link" onClick={() => handleSectionNavigation("coffee-section")}>
              Coffee
            </span>
          </p>
        </div>

        <div className="footer-column">
          <h3>Info</h3>
          <p>
            <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
              About
            </Link>
          </p>
          <p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>
          </p>
          <p>Donation</p>
        </div>

        <div className="footer-column">
          <h3>Hour</h3>
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
