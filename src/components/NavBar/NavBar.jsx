import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <img src="img/logo.png" alt="Wild Mirror Logo" />
            </div>

            <nav className={`navbar__links ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={closeMenu}>INICIO</Link>
                <Link to="/soul" onClick={closeMenu}>ALMA</Link>
                <Link to="/gallery" onClick={closeMenu}>COLECCION SALVAJE</Link>
                <Link to="/store" onClick={closeMenu}>TIENDA</Link>
                <Link to="/contact" onClick={closeMenu}>CONTACTO</Link>
            </nav>

            <button className="navbar__hamburger" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
};

export default NavBar;
