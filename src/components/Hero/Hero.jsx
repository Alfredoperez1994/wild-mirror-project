import { useState, useEffect } from "react";
import "./Hero.css";
import heroImages from "../../data/heroImages";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`hero__slide ${index === currentIndex ? "active" : ""}`}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="hero__image"
                    />
                    <div className="hero__text">
                        <h1>{image.text}</h1>
                    </div>
                </div>
            ))}

            <div className="hero__indicators">
                {heroImages.map((_, index) => (
                    <span
                        key={index}
                        className={`hero__dot ${index === currentIndex ? "active" : ""}`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;