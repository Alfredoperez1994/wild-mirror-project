import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Esperamos un pequeño delay para permitir que React pinte la vista
        const timeout = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100); // 100ms de delay opcional para asegurar el scroll suave

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
