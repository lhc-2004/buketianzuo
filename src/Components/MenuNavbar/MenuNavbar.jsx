import "./MenuNavbar.css"

function MenuNavbar() {
    return (
        <div className="sticky-navbar">
          <div className="sticky-navbar-content">
            <a className="nav-item" href="#cake-section">[ CAKE ]</a>
            <a className="nav-item" href="#bread-section">[ BREAD ]</a>
            <a className="nav-item" href="#tea-section">[ TEA ]</a>
            <a className="nav-item" href="#coffee-section">[ COFFEE ]</a>
            <a className="nav-item" href="#rice-roll-section">[ RICE ROLL ]</a>
          </div>
        </div>
    );
}

export default MenuNavbar;

