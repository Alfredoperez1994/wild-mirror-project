// src/components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
    return (
        <div className="absolute bottom-6 right-6 flex flex-col items-center gap-4 text-[#F5E9D3] opacity-70">

      <a
        href="https://instagram.com/rama.garcia.17"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#C1A87D] transition"
        aria-label="Instagram"
      >
        <FaInstagram size={20} />
      </a>

      <Link
        to="/contact"
        className="hover:text-[#C1A87D] transition"
        aria-label="Contacto"
      >
        <HiOutlineMail size={22} />
      </Link>

      <div className="w-px h-6 bg-[#C1A87D] opacity-40"></div>

      <span className="text-[10px] tracking-widest opacity-60">
        © WM
      </span>
    </div>
    );
};

export default Footer;
