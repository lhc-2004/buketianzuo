// Navbar Component
// The Navbar component includes a responsive navigation bar with links and a toggle functionality.
// It uses React's useRef for DOM manipulation and the react-icons library for toggle buttons.
// CSS handles both regular and responsive designs.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./navbar.css";

function Navbar() {
    const navRef = useRef();

    // Toggles the visibility of the navigation menu
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <Link to="/">
                <img
                    src={"/BUKELogo.png"}
                    alt="BUKE Logo"
                    className="navbar-logo"
                />
            </Link>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/menu" onClick={showNavbar}>Menu</Link>
                <Link to="/custome-cake" onClick={showNavbar}>Custome Cake</Link>
                <Link to="/about-us" onClick={showNavbar}>About Us</Link>
                <Link to="/contact" onClick={showNavbar}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;