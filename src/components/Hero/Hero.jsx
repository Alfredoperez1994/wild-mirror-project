import { useState, useEffect } from "react";
import "./Hero.css";
import heroImages from "../../data/heroImages";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000); // cambia cada 4 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero__overlay">
                <h1 className="hero__title">LO QUE LA NATURALEZA REFLEJA EN NOSOTROS</h1>

                <div className="hero__carousel">
                    <img
                        src={heroImages[currentIndex].src}
                        alt={heroImages[currentIndex].alt}
                        className="hero__image"
                    />
                </div>
                <div className="hero__indicators">
                    {heroImages.map((_, index) => (
                        <span
                            key={index}
                            className={`hero__dot ${index === currentIndex ? "active" : ""}`}
                        ></span>
                    ))}
                </div>

                <p className="hero__subtitle">
                    CADA ESPECIE, CADA PAISAJE COMO UN REFLEJO DONDE VERNOS
                </p>
            </div>
        </section>
    );
};

export default Hero;
