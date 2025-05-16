import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Webpages/Home.jsx";
import Menu from "./Webpages/Menu.jsx";
import About from "./Webpages/About.jsx";
import Contact from "./Webpages/Contact.jsx";
import CustomCake from "./Webpages/CustomCake.jsx";

import "./global.css";

function App() {
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom-cake" element={<CustomCake />} />
        </Routes>
        <Footer/>
    </Router>

    )
  
}

export default App
