import MenuBackground from "../Components/MenuBackground/MenuBackground.jsx";
import MenuNavbar from "../Components/MenuNavbar/MenuNavbar.jsx";

function Menu() {
    return (
        <>
            <MenuBackground />
            <MenuNavbar />
            <div id="cake-section">
                <h1>CAKE</h1>
                <p>Details about cakes...</p>
            </div>
            <div id="bread-section">
                <h1>BREAD</h1>
                <p>Details about bread...</p>
            </div>
            <div id="tea-section">
                <h1>TEA</h1>
                <p>Details about tea...</p>
            </div>
            <div id="coffee-section">
                <h1>COFFEE</h1>
                <p>Details about coffee...</p>
            </div>
            <div id="rice-roll-section">
                <h1>RICE ROLL</h1>
                <p>Details about rice rolls...</p>
            </div>
        </>
    );
}


export default Menu;