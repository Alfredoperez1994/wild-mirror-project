import "./Discover.css";
import { FaCamera, FaLeaf, FaGlobe, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const Discover = () => {
    return (
        <section className="discover">
            <div className="discover__container">
                <h2 className="discover__title">QUE VAS A ENCONTRAR ACÁ</h2>

                <div className="discover__icons">
                    <div className="discover__item">
                        <FaCamera size={28} />
                        <p>Fotografía salvaje</p>
                    </div>
                    <div className="discover__item">
                        <FaLeaf size={28} />
                        <p>Conexión interior</p>
                    </div>
                    <div className="discover__item">
                        <FaGlobe size={28} />
                        <p>Historias de viaje</p>
                    </div>
                    <div className="discover__item">
                        <FaCommentDots size={28} />
                        <p>Reflexiones que invitan</p>
                    </div>
                </div>
            </div>
            <div className="discover__gallery">
                <img src="/img/discover/elephant.jpeg" alt="Elefante" />
                <img src="/img/discover/temple.jpeg" alt="Templo" />
                <img src="/img/discover/train.jpeg" alt="Tren" />
                <img src="/img/discover/street.jpeg" alt="Calle" />
            </div>

            <Link to="/gallery" className="button-mirror">
                Explorar el reflejo
            </Link>
        </section>
    );
};

export default Discover;
