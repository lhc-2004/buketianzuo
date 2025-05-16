// MenuNavbar.jsx
// This component renders a sticky navigation bar for menu sections with smooth scrolling behavior
import React from "react";
import "./MenuNavbar.css";
import "../../global.css";

export default function MenuNavbar() {
  // Smooth scroll to target section
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // List of navigation items and their section IDs
  const navItems = [
    { id: "cake-section", label: "[ CAKE ]" },
    { id: "bread-section", label: "[ BREAD ]" },
    { id: "tea-section", label: "[ TEA ]" },
    { id: "coffee-section", label: "[ COFFEE ]" },
  ];

  return (
    <nav className="sticky-navbar">
      <div className="sticky-navbar-content">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="nav-item"
            onClick={(e) => handleScroll(e, id)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}