import { useState, useEffect, useRef } from "react";
import galleryPhotos from "../../data/galleryPhotos";
import LightBox from "./LightBox";
import Footer from "../Footer/Footer";

const GalleryComponent = () => {
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [likes, setLikes] = useState({});

    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselRef = useRef(null);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const SWIPE_THRESHOLD = 50;

    const albums = [
        { name: "landscape", cover: "/img/tierra_48.jpeg" },
        { name: "culture", cover: "/img/espiritu_26.jpeg" },
        { name: "wildlife", cover: "/img/hero_07.jpeg" },
    ];

    /* -------------------- FILTRO DE ALBUM -------------------- */
    const displayedPhotos =
        activeAlbum === "all"
            ? galleryPhotos
            : activeAlbum === null
                ? galleryPhotos
                : galleryPhotos.filter((p) => p.album === activeAlbum);

    /* -------------------- LIGHTBOX -------------------- */
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

    /* -------------------- LIKES -------------------- */
    const handleLike = (photoId) => {
        setLikes((prev) => ({
            ...prev,
            [photoId]: !prev[photoId],
        }));
    };

    /* -------------------- CAROUSEL -------------------- */
    const prevSlide = () => {
        setCarouselIndex((i) => (i - 1 + albums.length) % albums.length);
    };

    const nextSlide = () => {
        setCarouselIndex((i) => (i + 1) % albums.length);
    };

    // Cambiar álbum en base al slide
    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setActiveAlbum(albums[carouselIndex].name);
            setIsTransitioning(false);
        }, 250);
        return () => clearTimeout(timer);
    }, [carouselIndex]);

    // Keyboard
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // SWIPE
    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const onTouchMove = (e) => {
        touchDeltaX.current =
            e.touches[0].clientX - touchStartX.current;
    };

    const onTouchEnd = () => {
        if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
            if (touchDeltaX.current > 0) prevSlide();
            else nextSlide();
        }
        touchStartX.current = 0;
        touchDeltaX.current = 0;
    };

    return (
        <section className="w-full px-4 md:px-8 py-12 bg-stone-900 text-[#F5E9D3]">

            {/* 🎠 CARRUSEL */}
            <div className="relative w-full mx-auto mt-12 overflow-hidden">
                <div
                    ref={carouselRef}
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {albums.map((album) => (
                        <div key={album.name} className="min-w-full relative">
                            <img
                                src={album.cover}
                                alt={album.name}
                                className="w-full h-80 md:h-96 object-cover opacity-80"
                            />

                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center animate-fade">
                                <h3 className="text-6xl italic uppercase font-bold opacity-40 tracking-wide">
                                    {album.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Flechas */}
                <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 
w-10 h-10 grid place-content-center
bg-black/40 hover:bg-black/60 transition rounded-full border border-[#C1A87D]/30"
                >
                    ‹
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 
w-10 h-10 grid place-content-center
bg-black/40 hover:bg-black/60 transition rounded-full border border-[#C1A87D]/30"
                >
                    ›
                </button>
            </div>

            {/* Botón Colección completa */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setActiveAlbum("all")}
                    className="text-[#C1A87D] italic font-serif relative
after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px]
after:bg-[#C1A87D] after:scale-x-50 after:origin-left after:transition-transform
hover:after:scale-x-100"
                >
                    Colección completa
                </button>
            </div>


            {/* 🧱 MASONRY */}
            <div
                className={`columns-3 sm:columns-3 md:columns-4 lg:columns-4 xl:columns-5 gap-2 mt-12 transition-opacity duration-300
        ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
                {displayedPhotos.map((img, index) => (
                    <div
                        key={img.id}
                        className="relative mb-2 group cursor-pointer break-inside-avoid"
                        onClick={() => openLightbox(index)}
                    >
                        {/* LIKE */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLike(img.id);
                            }}
                            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center
               rounded-full backdrop-blur-md transition
               bg-black/40 hover:bg-black/60"
                        >
                            {likes[img.id] ? (
                                /* ❤️ LLENO */
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill={likes[img.id] ? "#C1A87D" : "none"}
                                    stroke={likes[img.id] ? "#C1A87D" : "#fff"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 21s-6.7-4.3-9.5-8.3c-2.2-3.2-.8-7.8 2.8-9.3 2.3-.9 4.9-.2 6.7 1.5C14.8 3.2 17.4 2.5 19.7 3.4c3.6 1.5 5 6.1 2.8 9.3C18.7 16.7 12 21 12 21z" />
                                </svg>
                            ) : (
                                /* 🤍 OUTLINE */
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill={likes[img.id] ? "#C1A87D" : "none"}
                                    stroke={likes[img.id] ? "#C1A87D" : "#fff"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 21s-6.7-4.3-9.5-8.3c-2.2-3.2-.8-7.8 2.8-9.3 2.3-.9 4.9-.2 6.7 1.5C14.8 3.2 17.4 2.5 19.7 3.4c3.6 1.5 5 6.1 2.8 9.3C18.7 16.7 12 21 12 21z" />
                                </svg>
                            )}
                        </button>

                        <img
                            src={img.src}
                            alt={img.title}
                            loading="lazy"
                            className="w-full h-auto object-cover transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01]"
                        />
                    </div>
                ))}

            </div>


            {/* ============================
    CIERRE VISUAL GALERÍA
============================= */}
            <div className="relative w-full flex justify-center overflow-hidden">

                {/* Imagen de fondo */}
                <img
                    loading="lazy"
                    className="opacity-80 mt-10 pointer-events-none select-none"
                    src="/img/discover/133.png"
                    alt="martin pescador"
                />

                {/* Footer flotante */}
                <Footer />
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
