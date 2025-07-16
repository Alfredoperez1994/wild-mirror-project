import "./GalleryComponent.css";
import galleryImages from "../../data/galleryImages";
import { useState, useEffect } from "react";
import LightBox from "./LightBox";

const GalleryComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const prevImage = () =>
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
    const nextImage = () =>
        setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex !== null) {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowRight") nextImage();
                if (e.key === "ArrowLeft") prevImage();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    return (
        <section className="gallery-section">
            <h2 className="gallery-title"></h2>

            <div className="masonry">
                {galleryImages.map((img, index) => (
                    <div
                        className="masonry-item"
                        key={index}
                        onClick={() => openLightbox(index)}
                        onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                        role="button"
                        tabIndex={0}
                    >
                        <img src={img.src} alt={img.title} loading="lazy" />
                        <div className="overlay">
                            <h3>{img.title}</h3>
                            <p className="location">{img.location}</p>
                            <p>{img.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <LightBox
                image={selectedIndex !== null ? galleryImages[selectedIndex] : null}
                onClose={closeLightbox}
                onPrev={prevImage}
                onNext={nextImage}
            />
        </section>
    );
};

export default GalleryComponent;
