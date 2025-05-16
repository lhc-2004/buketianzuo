// MenuBackground.jsx
// Displays a background image with overlay and delayed typing animation for subtext
import React, { useEffect } from "react";
import { menuBackgroundImage, menuBackgroundSlogan } from "../../info";
import "./menuBackground.css";

function MenuBackground() {
  useEffect(() => {
    const subtextElement = document.querySelector(".subtext");

    // Delay revealing the subtext to start animation
    const timer = setTimeout(() => {
      subtextElement?.classList.remove("hidden");
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="menu-background">
      {/* Background image */}
      <img
        src={menuBackgroundImage}
        alt="Menu Background"
        className="background-image"
      />

      {/* Overlay and text content */}
      <div className="text-container">
        <div className="centered-text">MENU</div>
        <div className="subtext hidden">{menuBackgroundSlogan}</div>
      </div>
    </div>
  );
}

export default MenuBackground;
