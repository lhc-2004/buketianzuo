import { Link, useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation to a specific section of the menu page
  const handleSectionNavigation = (sectionId) => {
    navigate("/menu", { state: { sectionId } });
  };

  return (
    <div className="footer-container">
      {/* Logo Section: Links back to the home page */}
      <div className="logo-section">
        <Link
          to="/"
          aria-label="Go to home page"
          onClick={() => window.scrollTo(0, 0)} // Ensures page scrolls to top on navigation
        >
          <img
            src="/FancyBUKELogo.png"
            alt="BUKE Logo"
            className="footer-navbar-logo"
          />
        </Link>
      </div>

      {/* Footer Content: Organized into columns */}
      <div className="footer-content">
        {/* Column 1: Address and Contact Info */}
        <div className="footer-column">
          <h3>Address</h3>
          <p>123 Example St</p>
          <p>City, Country</p>
          <p>Email: example@buke.com</p>
        </div>

        {/* Column 2: Menu Links with Section Navigation */}
        <div className="footer-column">
          <h3>
            <Link
              to="/menu"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => window.scrollTo(0, 0)} // Scrolls to top on navigation
            >
              Menu
            </Link>
          </h3>
          <p>
            {/* Navigation to Custom Cake section */}
            <span
              className="footer-link"
              style={{ cursor: "pointer" }}
              onClick={() => handleSectionNavigation("cake-section")}
            >
              Custom Cake
            </span>
          </p>
          <p>
            {/* Navigation to Bread section */}
            <span
              className="footer-link"
              style={{ cursor: "pointer" }}
              onClick={() => handleSectionNavigation("bread-section")}
            >
              Bread
            </span>
          </p>
          <p>
            {/* Navigation to Tea section */}
            <span
              className="footer-link"
              style={{ cursor: "pointer" }}
              onClick={() => handleSectionNavigation("tea-section")}
            >
              Tea
            </span>
          </p>
          <p>
            {/* Navigation to Coffee section */}
            <span
              className="footer-link"
              style={{ cursor: "pointer" }}
              onClick={() => handleSectionNavigation("coffee-section")}
            >
              Coffee
            </span>
          </p>
        </div>

        {/* Column 3: Additional Info Links */}
        <div className="footer-column">
          <h3>Info</h3>
          <p>
            {/* About Us link */}
            <Link
              to="/about-us"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => window.scrollTo(0, 0)} // Scrolls to top on navigation
            >
              About
            </Link>
          </p>
          <p>
            {/* Contact page link */}
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => window.scrollTo(0, 0)} // Scrolls to top on navigation
            >
              Contact
            </Link>
          </p>
          {/* Placeholder for future donation link */}
          <p>Donation</p>
        </div>

        {/* Column 4: Operating Hours */}
        <div className="footer-column">
          <h3>Hour</h3>
          <p>Mon-Fri: 9am - 9pm</p>
          <p>Sat-Sun: 10am - 8pm</p>
        </div>
      </div>

      {/* Footer Bottom Section: Copyright Notice */}
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
