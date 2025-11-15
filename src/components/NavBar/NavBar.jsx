import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    //  Toggle menú móvil
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    //  Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //  Bloquear scroll al abrir el menú móvil
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-6 md:px-16 py-4
        transition-all duration-500
        ${scrolled ? "bg-stone-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
        >
            {/*  Logo */}
            <div className="flex items-center">
                <img
                    src="/img/logo.png"
                    alt="Wild Mirror Logo"
                    className="h-10 md:h-14 opacity-90"
                />
            </div>

            {/*  Links Desktop */}
            <nav className="hidden md:flex gap-8 uppercase text-[#F5E9D3] tracking-widest font-semibold">
                <Link to="/" className="hover:text-[#C1A87D] transition">Inicio</Link>
                <Link to="/soul" className="hover:text-[#C1A87D] transition">Alma</Link>
                <Link to="/gallery" className="hover:text-[#C1A87D] transition">Colección Salvaje</Link>
                <Link to="/store" className="hover:text-[#C1A87D] transition">Tienda</Link>
                <Link to="/contact" className="hover:text-[#C1A87D] transition">Contacto</Link>
            </nav>

            {/*  Botón Menu */}
            <button
                onClick={toggleMenu}
                className="text-[#F5E9D3] text-3xl md:hidden z-60"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/*  Menú Móvil */}
            <div
                className={`
          fixed inset-0 z-50
          bg-stone-900/95 backdrop-blur-lg
          flex flex-col items-center justify-center gap-10
          text-[#F5E9D3] uppercase tracking-widest text-xl
          transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <Link to="/" onClick={closeMenu} className="hover:text-[#C1A87D]">Inicio</Link>
                <Link to="/soul" onClick={closeMenu} className="hover:text-[#C1A87D]">Alma</Link>
                <Link to="/gallery" onClick={closeMenu} className="hover:text-[#C1A87D]">Colección Salvaje</Link>
                <Link to="/store" onClick={closeMenu} className="hover:text-[#C1A87D]">Tienda</Link>
                <Link to="/contact" onClick={closeMenu} className="hover:text-[#C1A87D]">Contacto</Link>
            </div>
        </header>
    );
};

export default NavBar;
