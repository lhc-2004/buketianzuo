import { useRef } from "react"
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"; 
import "../Styles/main.css"

function Navbar () {
    const navRef = useRef();
    const animationRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>BUKE</h3>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/menu" onClick={showNavbar}>Menu</Link>
                <Link to="/about-us" onClick={showNavbar}>About Us</Link>
                <Link to="/location" onClick={showNavbar}>Location</Link>
                <Link to="/contact" onClick={showNavbar}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick = {showNavbar}>
                    <FaTimes/> 
                </button>
            </nav>
            <button className="nav-btn" onClick = {showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar 