import "./StoreComponent.css";
import { FaTools } from "react-icons/fa";

const StoreComponent = () => {
    return (
        <section className="store">
            <div className="store__container">
                <FaTools className="store__icon" />
                <h2 className="store__title">Tienda en construcción</h2>
                <p className="store__text">
                    Muy pronto vas a poder adquirir obras y productos exclusivos desde acá. ¡Gracias por tu paciencia!
                </p>
            </div>
        </section>
    );
};

export default StoreComponent;
