import MenuBackground from "../Components/MenuBackground/MenuBackground.jsx";
import MenuNavbar from "../Components/MenuNavbar/MenuNavbar.jsx";
import Section from "../Components/Section/Section.jsx"
import menuData from "../menuData.json"

function Menu() {
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