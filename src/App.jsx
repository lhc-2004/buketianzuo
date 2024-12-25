import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from "./Webpages/Home";
import Menu from "./Webpages/Menu";
import About from "./Webpages/About";
import Location from "./Webpages/Location";
import Contact from "./Webpages/Contact";

function App() {
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    )
  
}

export default App
