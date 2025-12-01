import { useState, useEffect, useRef } from "react";
import galleryPhotos from "../../data/galleryPhotos";
import LightBox from "./LightBox";

const GalleryComponent = () => {
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    // carousel state
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselRef = useRef(null);

    // touch state para swipe
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const SWIPE_THRESHOLD = 50; // px mínimo para considerar swipe

    const albums = [
        { name: "landscape", cover: "/img/agua_10.jpeg" },
        { name: "culture", cover: "/img/espiritu_21.jpeg" },
        { name: "wildlife", cover: "/img/aire_28.jpeg" },
    ];

    // Si no hay álbum → mostrar todas
    const displayedPhotos =
        activeAlbum === null
            ? galleryPhotos
            : galleryPhotos.filter((photo) => photo.album === activeAlbum);

    // Lightbox handlers
    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const prevImage = () =>
        setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : displayedPhotos.length - 1
        );
    const nextImage = () =>
        setSelectedIndex((prev) =>
            prev < displayedPhotos.length - 1 ? prev + 1 : 0
        );

    // --- Carrusel handlers ---
    const slidesCount = albums.length;

    const prevSlide = (e) => {
        e?.stopPropagation();
        setCarouselIndex((i) => (i - 1 + slidesCount) % slidesCount);
    };
    const nextSlide = (e) => {
        e?.stopPropagation();
        setCarouselIndex((i) => (i + 1) % slidesCount);
    };

    // si se selecciona un album, opcionalmente podrías resetear el index
    useEffect(() => {
        if (activeAlbum === null) setCarouselIndex(0);
    }, [activeAlbum]);

    // keyboard navigation para el carrusel (solo cuando está visible)
    useEffect(() => {
        const onKey = (e) => {
            if (activeAlbum === null) {
                if (e.key === "ArrowLeft") prevSlide();
                if (e.key === "ArrowRight") nextSlide();
                if (e.key === "Enter") {
                    // Enter abre album actual
                    setActiveAlbum(albums[carouselIndex].name);
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carouselIndex, activeAlbum]);

    // Touch events: start, move, end
    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const onTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        touchDeltaX.current = currentX - touchStartX.current;
        // opcional: mover el slider visualmente durante swipe (pequeña mejora)
        if (carouselRef.current) {
            const width = carouselRef.current.clientWidth;
            const offset = -carouselIndex * width + touchDeltaX.current;
            carouselRef.current.style.transform = `translateX(${offset}px)`;
        }
    };

    const onTouchEnd = () => {
        // restaurar transform para que use el estado real del carouselIndex
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${carouselIndex * 100}%)`;
        }
        if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
            if (touchDeltaX.current > 0) prevSlide();
            else nextSlide();
        }
        touchStartX.current = 0;
        touchDeltaX.current = 0;
    };

    return (
        <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-stone-900 text-[#F5E9D3]">

            {/* 🎠 CARRUSEL (solo cuando no hay álbum seleccionado) */}
            {activeAlbum === null && (
                <div className="relative w-full max-w-6xl mx-auto mt-12 overflow-hidden rounded-lg">
                    {/* Contenedor de slides (100% ancho por slide) */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                        ref={carouselRef}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {albums.map((album, i) => (
                            <div
                                key={album.name}
                                className="min-w-full relative group"
                                // click en la slide abre el álbum
                                onClick={() => setActiveAlbum(album.name)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Abrir álbum ${album.name}`}
                            >
                                <img
                                    src={album.cover}
                                    alt={album.name}
                                    className="w-full h-96 object-cover transition-transform duration-400 group-hover:scale-105 opacity-50 group-hover:opacity-100 "
                                />

                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                                    <h3 className="text-6xl font-bold uppercase mb-4 opacity-40 font-serif">{album.name}</h3>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveAlbum(album.name);
                                        }}
                                        className="bg-transparent hover:border underline text-[#C1A87D] px-6 py-2 rounded-md font-semibold hover:bg-trasparent font-serif transition cursor-pointer"
                                    >
                                        Ver álbum
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Flechas */}
                    <button
                        onClick={prevSlide}
                        aria-label="Anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full focus:outline-none cursor-pointer"
                    >
                        {/* ícono simple: chevron */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        aria-label="Siguiente"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full focus:outline-none cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots (indicador opcional) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {albums.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCarouselIndex(i);
                                }}
                                className={`w-3 h-3 rounded-full ${i === carouselIndex ? "bg-[#C1A87D]" : "bg-white/40"}`}
                                aria-label={`Ir a la slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* 🔙 BOTÓN VOLVER */}
            {activeAlbum && (
                <div className="text-center my-8">
                    <button
                        onClick={() => setActiveAlbum(null)}
                        className="bg-trasparent text-[#C1A87D] px-6 py-2 rounded-md underline font-semibold font-serif hover:bg-trasparent hover:border transition cursor-pointer"
                    >
                        Ver todos
                    </button>
                </div>
            )}

            {/* 🧱 MASONRY */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 mt-10">
                {displayedPhotos.map((img, index) => (
                    <div
                        key={index}
                        className="relative mb-2 cursor-pointer overflow-hidden group break-inside-avoid-column"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-[#F5E9D3]">
                            <h3 className="text-lg font-semibold">{img.location}</h3>
                            <p className="text-xs italic">{img.album}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔦 LIGHTBOX */}
            <LightBox
                image={selectedIndex !== null ? displayedPhotos[selectedIndex] : null}
                onClose={closeLightbox}
                onPrev={prevImage}
                onNext={nextImage}
            />
        </section>
    );
};

export default GalleryComponent;
