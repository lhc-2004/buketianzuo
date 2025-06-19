// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { navBarBukeLogo } from "../../info";

export default function Navbar() {
  // State for mobile nav menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State to disable transition effects during resizing
  const [isResizing, setIsResizing] = useState(false);
  // State to trigger fade animation when resizing from mobile to desktop
  const [fadeInDesktop, setFadeInDesktop] = useState(false);

  // Refs for window width and debouncing timeouts
  const prevWidthRef = useRef(window.innerWidth);
  const resizeDebounce = useRef(null);
  const fadeTimer = useRef(null);
  const location = useLocation();

  // Toggle the navigation menu
  const toggleNav = () => setIsOpen(o => !o);

  // Close nav menu if current screen is mobile
  const closeIfMobile = () => {
    if (window.innerWidth <= 1024) setIsOpen(false);
  };

  // Close nav menu whenever the route/path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle window resizing to adjust nav behavior
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsResizing(true);

      // Trigger fade if switching from mobile to desktop
      if (prevWidthRef.current <= 1024 && w > 1024) {
        setIsOpen(false);
        setFadeInDesktop(true);
        clearTimeout(fadeTimer.current);
        fadeTimer.current = setTimeout(() => setFadeInDesktop(false), 350);
      }

      prevWidthRef.current = w;
      clearTimeout(resizeDebounce.current);
      resizeDebounce.current = setTimeout(() => setIsResizing(false), 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeDebounce.current);
      clearTimeout(fadeTimer.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {/* Logo linking to homepage */}
      <Link to="/buketianzuo/">
        <img src={navBarBukeLogo} alt="BUKE Logo" className="navbar-logo" />
      </Link>

      {/* Primary navigation links */}
      <nav
        id="primary-navigation"
        data-open={isOpen}
        data-resizing={isResizing}
        className={fadeInDesktop ? "fade-desktop" : ""}
      >
        <Link to="/buketianzuo/" onClick={closeIfMobile}>Home</Link>
        <Link to="/menu" onClick={closeIfMobile}>Menu</Link>
        <Link to="/custom-cake" onClick={closeIfMobile}>Custom Cake</Link>
        <Link to="/about-us" onClick={closeIfMobile}>About Us</Link>
        <Link to="/contact" onClick={closeIfMobile}>Contact</Link>
        <Link to="/order" onClick={closeIfMobile} className="order-btn">Order Online</Link>

        {/* Close button for mobile nav */}
        <button className="nav-btn nav-close-btn" onClick={toggleNav} aria-label="Close navigation">
          <FaTimes />
        </button>
      </nav>

      {/* Hamburger button to open nav */}
      <button
        className="nav-btn"
        onClick={toggleNav}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}