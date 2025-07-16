// src/components/Footer/Footer.jsx
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link to="/">
                    <img src="/img/logo.png" alt="Wild Mirror Logo" className="footer__logo" />
                </Link>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/wildmirror.project"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <p className="footer__text">
                © {new Date().getFullYear()} Wild Mirror · Conectando lo salvaje con lo esencial
            </p>
        </footer>
    );
};

export default Footer;
