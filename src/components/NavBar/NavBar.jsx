import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Toggle menú móvil
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    // Detectar scroll (solo si el menú está cerrado)
    useEffect(() => {
        const handleScroll = () => {
            if (!menuOpen) {
                setScrolled(window.scrollY > 50);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <>
            {/* HEADER */}
            <header
                className={`
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between
          px-6 md:px-16 py-4
          transition-all duration-500
          ${scrolled ? "bg-stone-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
            >
                {/* Logo */}
                <Link to="/" onClick={closeMenu}>
                    <img
                        src="/img/logo.png"
                        alt="Wild Mirror Logo"
                        className="h-10 md:h-14 opacity-90"
                    />
                </Link>

                {/* Links Desktop */}
                <nav className="hidden md:flex gap-8 uppercase text-[#F5E9D3] tracking-widest font-semibold">
                    {[
                        { to: "/", label: "Inicio" },
                        { to: "/soul", label: "Alma" },
                        { to: "/gallery", label: "Colección Salvaje" },
                        { to: "/store", label: "Foto Del Mes" },
                        { to: "/contact", label: "Contacto" },
                    ].map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `relative group transition-colors duration-300
                ${isActive ? "text-[#C1A87D]" : "hover:text-[#C1A87D]"}`
                            }
                        >
                            {label}
                            <span
                                className="
                  absolute left-0 -bottom-1 h-px w-full
                  bg-[#C1A87D]
                  scale-x-0 origin-left
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
                            />
                        </NavLink>
                    ))}
                </nav>

                {/* Botón hamburguesa (mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-[#F5E9D3] text-3xl z-[70]"
                    aria-label="Abrir menú"
                >
                    <FaBars />
                </button>
            </header>

            {/* MENÚ MOBILE */}
            <div
                className={`
          fixed inset-0 z-[60]
          bg-stone-900/95 backdrop-blur-lg
          transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* Botón cerrar */}
                <button
                    onClick={closeMenu}
                    className="absolute top-6 right-6 text-[#F5E9D3] text-3xl z-[70]"
                    aria-label="Cerrar menú"
                >
                    <FaTimes />
                </button>

                {/* Links */}
                <div className="flex flex-col items-center justify-center h-full gap-10 uppercase tracking-widest text-xl text-[#F5E9D3]">
                    <Link to="/" onClick={closeMenu} className="hover:text-[#C1A87D] transition">
                        Inicio
                    </Link>
                    <Link to="/soul" onClick={closeMenu} className="hover:text-[#C1A87D] transition">
                        Alma
                    </Link>
                    <Link to="/gallery" onClick={closeMenu} className="hover:text-[#C1A87D] transition">
                        Colección Salvaje
                    </Link>
                    <Link to="/store" onClick={closeMenu} className="hover:text-[#C1A87D] transition">
                        Foto Del Mes
                    </Link>
                    <Link to="/contact" onClick={closeMenu} className="hover:text-[#C1A87D] transition">
                        Contacto
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;
