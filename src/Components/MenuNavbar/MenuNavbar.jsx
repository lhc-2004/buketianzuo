// MenuNavbar Component
// This component renders a sticky navigation bar that provides quick links to various sections of a menu.
// It includes a responsive design and smooth scrolling behavior.

import "./MenuNavbar.css";
import "../../global.css";

function MenuNavbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky-navbar">
      <div className="sticky-navbar-content">
        <a
          className="nav-item"
          href="#cake-section"
          onClick={(e) => handleScroll(e, "cake-section")}
        >
          [ CAKE ]
        </a>
        <a
          className="nav-item"
          href="#bread-section"
          onClick={(e) => handleScroll(e, "bread-section")}
        >
          [ BREAD ]
        </a>
        <a
          className="nav-item"
          href="#tea-section"
          onClick={(e) => handleScroll(e, "tea-section")}
        >
          [ TEA ]
        </a>
        <a
          className="nav-item"
          href="#coffee-section"
          onClick={(e) => handleScroll(e, "coffee-section")}
        >
          [ COFFEE ]
        </a>
      </div>
    </div>
  );
}

export default MenuNavbar;