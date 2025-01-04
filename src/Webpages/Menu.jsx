import MenuBackground from "../Components/MenuBackground/MenuBackground.jsx";
import MenuNavbar from "../Components/MenuNavbar/MenuNavbar.jsx";
import Section from "../Components/Section/Section.jsx"
import menuData from "../menuData.json"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (location.state?.sectionId) {
        const element = document.getElementById(location.state.sectionId);
        if (element) {
          // Use a slight delay to ensure the DOM is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100); // Adjust the delay as needed
        }
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <>
      <MenuBackground />
      <MenuNavbar />
      <div className="menu">
        {menuData.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            products={section.products}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
