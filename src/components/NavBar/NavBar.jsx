import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // 🧭 Efecto para detectar scroll y aplicar fondo opaco
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50 
                flex items-center justify-between 
                px-6 md:px-16 py-4 
                transition-all duration-500 
                ${scrolled
                    ? "bg-stone-700/20 backdrop-blur-md shadow-lg"
                    : "bg-transparent hover:bg-stone-900/70 hover:backdrop-blur-sm"}
            `}
        >
            {/* 🔲 Logo */}
            <div className="flex items-center">
                <img
                    src="/img/logo.png"
                    alt="Wild Mirror Logo"
                    className="h-10 md:h-14 opacity-90"
                />
            </div>

            {/* 🔗 Links principales */}
            <nav
                className={`
                    hidden md:flex gap-8 uppercase text-[#F5E9D3] tracking-widest font-semibold
                `}
            >
                <Link to="/" className="hover:text-[#C1A87D] transition-colors duration-300">Inicio</Link>
                <Link to="/soul" className="hover:text-[#C1A87D] transition-colors duration-300">Alma</Link>
                <Link to="/gallery" className="hover:text-[#C1A87D] transition-colors duration-300">Colección Salvaje</Link>
                <Link to="/store" className="hover:text-[#C1A87D] transition-colors duration-300">Tienda</Link>
                <Link to="/contact" className="hover:text-[#C1A87D] transition-colors duration-300">Contacto</Link>
            </nav>

            {/* ☰ Hamburguesa (solo móvil) */}
            <button
                onClick={toggleMenu}
                className="text-[#F5E9D3] text-2xl md:hidden focus:outline-none"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* 📱 Menú móvil */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-3/4 bg-stone-900/95 backdrop-blur-md 
                    flex flex-col items-center justify-center gap-8 
                    text-[#F5E9D3] uppercase tracking-widest 
                    transform transition-transform duration-500 
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <Link to="/" onClick={closeMenu} className="hover:text-[#C1A87D] text-lg">Inicio</Link>
                <Link to="/soul" onClick={closeMenu} className="hover:text-[#C1A87D] text-lg">Alma</Link>
                <Link to="/gallery" onClick={closeMenu} className="hover:text-[#C1A87D] text-lg">Colección Salvaje</Link>
                <Link to="/store" onClick={closeMenu} className="hover:text-[#C1A87D] text-lg">Tienda</Link>
                <Link to="/contact" onClick={closeMenu} className="hover:text-[#C1A87D] text-lg">Contacto</Link>
            </div>
        </header>
    );
};

export default NavBar;
