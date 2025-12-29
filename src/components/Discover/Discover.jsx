import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const Discover = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector("#discover-section");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="discover-section"
            className={`relative bg-stone-900 text-[#F5E9D3] -mt-[1vh] pt-[2vh] pb-32 px-6 md:px-16 overflow-hidden transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {/* ============================
                 TÍTULO PRINCIPAL
            ============================= */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-32">

                <div className="flex flex-col gap-4 text-left md:w-1/2 md:pr-10">
                    <h1 className="font-mono text-4xl md:text-5xl uppercase tracking-widest mb-2">
                        Lo que la Naturaleza refleja en nosotros
                    </h1>
                    <h2 className="font-mono text-3xl md:text-4xl uppercase tracking-widest mb-2">
                        Cada especie, Cada paisaje como un reflejo donde vernos
                    </h2>
                </div>

                {/* Imagen principal con superposición */}
                <div className="relative mt-12 md:mt-0 md:ml-10 md:w-1/2 flex justify-center">
                    <img
                        loading="lazy"
                        src="/img/discover/camaleon_01.jpeg"
                        alt="Naturaleza"
                        className="object-cover h-96 w-80 md:h-120 md:w-88 lg:w-104 shadow-xl shadow-black hover:scale-105 transition-transform duration-700"
                    />

                    <img
                        loading="lazy"
                        src="/img/logo.png"
                        alt="Wild Mirror Logo"
                        className="absolute bottom-0 right-20 z-10 h-10 md:h-18 opacity-30"
                    />

                    <img
                        loading="lazy"
                        src="/img/discover/camaleon_03.jpeg"
                        className="hidden lg:block absolute -bottom-12 -left-24 w-60 shadow-xl shadow-black hover:scale-105 transition-transform duration-700"
                        alt="Small Zebra"
                    />
                </div>
            </div>

            {/* ============================
                 BANNER CENTRAL
            ============================= */}
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen my-24 overflow-hidden shadow-xl shadow-black">
                <img
                    loading="lazy"
                    src="/img/discover/aire_02.jpeg"
                    alt="Banner"
                    className="h-64 md:h-100 lg:h-100 w-full object-cover brightness-90"
                />
                <img
                    loading="lazy"
                    src="/img/logo.png"
                    alt="Wild Mirror Logo"
                    className="absolute bottom-0 left-5 z-10 h-10 md:h-18 opacity-30"
                />
            </div>

            {/* ============================
                 GRID PRINCIPAL
            ============================= */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 auto-rows-[250px] mb-50">

                {/* VIDEO BLOCK */}
                <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        src="/video/video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />

                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* BLOQUE DE TEXTO WILD MIRROR */}
                <div className="bg-[#2a2a2a] px-6 py-8 flex flex-col justify-center">
                    <h3 className="uppercase text-xl font-semibold tracking-widest text-[#F5E9D3] mb-3">
                        Wild Mirror
                    </h3>

                    <div className="w-12 h-px bg-[#C1A87D] mb-6"></div>

                    <p className="text-[#F5E9D3]/80 font-serif text-base leading-relaxed max-w-sm">
                        No es solo fotografía. Es una búsqueda viva, un puente entre la naturaleza y el alma.
                        Una invitación a mirar más despacio y sentir más profundo.
                    </p>
                </div>

                {/* IMÁGENES SUELTAS */}
                <div className="overflow-hidden">
                    <img loading="lazy" src="/img/aire_28.jpeg" className="w-full h-full object-cover" alt="" />
                </div>

                <div className="row-span-2 overflow-hidden">
                    <img loading="lazy" src="/img/soul/selfie.jpeg" className="w-full h-full object-cover" alt="" />
                </div>

                {/* ============================
                     BLOQUE RAMIRO + BOTÓN ALMA
                ============================= */}
                <div className="bg-[#2a2a2a] px-6 py-8 flex flex-col justify-between">
                    <div>
                        <h3 className="uppercase text-xl font-semibold tracking-widest text-[#F5E9D3] mb-3">
                            Ramiro García
                        </h3>

                        <div className="w-12 h-[1px] bg-[#C1A87D] mb-6"></div>

                        <p className="text-[#F5E9D3]/80 font-serif text-base leading-relaxed max-w-sm mb-8">
                            Viajero, fotógrafo y eterno aprendiz de la naturaleza.
                            Observador de lo invisible.
                        </p>

                        <Link
                            to="/soul"
                            className="inline-block text-[#C1A87D] italic font-serif relative
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px]
        after:bg-[#C1A87D] after:scale-x-0 after:origin-left after:transition-transform
        hover:after:scale-x-100"
                        >
                            Más sobre mí
                        </Link>
                    </div>
                </div>


                {/* IMÁGENES FINALES */}
                <div className="row-span-2 overflow-hidden">
                    <img loading="lazy" src="/img/discover/aire_47.jpeg" className="w-full h-full object-cover" alt="" />
                </div>

                <div className="overflow-hidden">
                    <img loading="lazy" src="/img/arde_sutil.jpeg" className="w-full h-full object-cover" alt="" />
                </div>

                <div className="bg-stone-900 col-span-1 sm:col-span-2">
                    <img loading="lazy" src="/img/aire_03.jpeg" className="w-full h-full object-cover" alt="" />
                </div>

                {/* TEXTO INFERIOR */}
                <div className="bg-[#2a2a2a] px-6 py-8 flex flex-col justify-center">
                    <h3 className="uppercase text-sm font-semibold tracking-widest text-[#F5E9D3] mb-3">
                        Geirangafjorden
                    </h3>

                    <div className="w-12 h-[1px] bg-[#C1A87D] mb-6"></div>

                    <p className="text-[#F5E9D3]/80 font-serif text-base leading-relaxed max-w-md mb-8">
                        A través de mi lente busco capturar no solo la belleza salvaje del mundo,
                        sino también los silencios, las emociones y los mensajes que la Tierra
                        nos susurra cuando estamos dispuestos a escuchar.
                    </p>

                    <Link
                        to="/gallery"
                        className="inline-block text-[#C1A87D] italic font-serif relative
      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px]
      after:bg-[#C1A87D] after:scale-x-0 after:origin-left after:transition-transform
      hover:after:scale-x-100"
                    >
                        Explorar el reflejo
                    </Link>
                </div>
            </div>

            {/* ============================
                 MINI GALERÍA FINAL
            ============================= */}
            <div className="discover__gallery grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                {[
                    { src: "/img/discover/tierra_66.jpeg", alt: "Elefante" },
                    { src: "/img/discover/espiritu_15.jpeg", alt: "Templo" },
                    { src: "/img/discover/tierra_46.jpeg", alt: "Tren" },
                    { src: "/img/discover/tierra_54.jpeg", alt: "Calle" },
                ].map((img, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-sm transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            loading="lazy"
                            src={img.src}
                            alt={img.alt}
                            className="object-cover w-full h-60 md:h-102 brightness-70 hover:brightness-110 transition-all duration-700"
                        />

                        <p className="flex items-center gap-2 text-lg text-[#EBDDC0] mt-2">
                            <FaLocationDot className="text-[#C1A87D]" /> Ubicación
                        </p>
                    </div>
                ))}
            </div>


            <img
                loading="lazy"
                className="opacity-80 -mb-32 mt-10"
                src="/img/discover/133.png"
                alt="martin pescador"
            />

            <Footer />
        </section>
    );
};

export default Discover;
