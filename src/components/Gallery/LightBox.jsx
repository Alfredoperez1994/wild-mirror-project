import { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./LightBox.css";

const LightBox = ({ image, onClose, onPrev, onNext }) => {

    if (!image) return null;

    return (
        <div className="lightbox" role="dialog" aria-modal="true">
            <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">
                <FaTimes />
            </button>

            <button className="lightbox__nav left" onClick={onPrev} aria-label="Anterior">
                <FaChevronLeft />
            </button>

            <div className="lightbox__content">
                <div className="lightbox__image-wrapper">
                    <img
                        src={image.src}
                        alt={image.title}
                        className="lightbox__img"
                    />
                    <div className="lightbox__watermark">{image.watermark}</div>
                </div>
            </div>

            <button className="lightbox__nav right" onClick={onNext} aria-label="Siguiente">
                <FaChevronRight />
            </button>
        </div>
    );
};

export default LightBox;
