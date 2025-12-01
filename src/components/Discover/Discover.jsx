import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Discover = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.01 }
        );
        const section = document.querySelector("#discover-section");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    }, []);



    return (
        <section
            id="discover-section"
            className={`relative bg-stone-900 text-[#F5E9D3] -mt-[1vh] pt-[2vh] pb-32 px-6 md:px-16 overflow-hidden transition-all duration-900 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {/* --- Título principal --- */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-32 ">


                <div className="flex flex-col gap-4 text-left md:w-1/2 md:pr-10">
                    <h1 className="font-mono text-4xl md:text-4
                    xl uppercase tracking-widest mb-2">
                        Lo que la Naturaleza refleja en nosotros
                    </h1>
                    <h2 className="font-mono text-3xl md:text-4xl uppercase tracking-widest mb-2">
                        Cada especie, Cada paisaje como un reflejo donde vernos
                    </h2>
                </div>

                <div className="relative mt-12 md:mt-0 md:ml-10 md:w-1/2 flex justify-center">
                    <img
                        src="/img/discover/camaleon_01.jpeg"
                        alt="Naturaleza"
                        className="object-cover rounded-sm h-96 w-80 md:h-120 md:w-88 lg:w-104 shadow-xl shadow-black hover:scale-105 transition-transform duration-700"
                    />
                    <img
                        src="/img/logo.png"
                        alt="Wild Mirror Logo"
                        className="absolute bottom-0 right-20 z-10 h-10 md:h-18 opacity-30"
                    />

                    {/* Imagen superpuesta (solo DESKTOP) */}
                    <img
                        src="/img/discover/camaleon_03.jpeg"
                        className="hidden lg:block absolute -bottom-12 -left-23 w-60 rounded-sm shadow-xl shadow-black hover:scale-105 transition-transform duration-700"
                        alt="Small Zebra"
                    />
                </div>

            </div>

            {/* --- Banner --- */}
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen my-24 overflow-hidden shadow-xl/100 shadow-black">
                <img src="/img/discover/aire_02.jpeg" alt="" className="h-64 md:h-100 lg:h-100 w-full object-cover brightness-90" />
                <img
                    src="/img/logo.png"
                    alt="Wild Mirror Logo"
                    className="absolute bottom-0 left-5 z-10 h-10 md:h-18 opacity-30"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 auto-rows-[250px] mb-50">

                {/* Imagen grande (play video) */}
                <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
                    <img
                        src="/img/discover/aire_17.jpeg"
                        className="w-full h-full object-cover"
                        alt="Hero"
                    />
                      <img
                    src="/img/logo.png"
                    alt="Wild Mirror Logo"
                    className="absolute bottom-0 left-5 z-10 h-10 md:h-18 opacity-30"
                />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="border border-white text-white px-6 py-2 text-sm tracking-widest backdrop-blur-sm">
                            ▶ PLAY VIDEO
                        </button>
                    </div>
                </div>

                {/* Bloque de texto */}
                <div className="bg-stone-900  rounded p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="uppercase text-2xl font-semibold mb-2 tracking-wider">
                            Wild Mirror
                        </h3>
                        <p className="text-[#F5E9D3] font-serif text-md leading-relaxed">
                            No es solo fotografía. Es una búsqueda viva, un puente entre la naturaleza y el alma.
                            Invita a mirar y a sentir. A preguntarnos qué se mueve dentro nuestro cuando nos encontramos con
                            lo salvaje, con lo libre, con lo esencial. Es arte como puente. Es vida que se observa a sí misma.
                        </p>
                    </div>

                </div>

                {/* Imagen */}
                <div className="overflow-hidden">
                    <img
                        src="/img/discover/vaca.jpeg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                    
                </div>

                {/* Imagen vertical grande */}
                <div className="row-span-2 overflow-hidden">
                    <img
                        src="/img/soul/selfie.jpeg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                {/* Texto horizontal */}
                <div className="bg-stone-900 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="uppercase text-2xl font-semibold mb-2 tracking-wider">
                            Ramiro García
                        </h3>
                        <p className="text-[#F5E9D3] text-md font-serif leading-relaxed">
                            Viajero, fotógrafo y eterno aprendiz de la naturaleza. A través de mi lente busco capturar no solo la belleza salvaje del mundo, sino también los silencios, las emociones y los mensajes que la Tierra nos susurra cuando estamos dispuestos a escuchar.
                        </p>
                    </div>

                </div>

                {/* Imagen */}
                <div className="row-span-2 overflow-hidden">
                    <img
                        src="/img/discover/aire_47.jpeg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                {/* Imagen */}
                <div className="overflow-hidden">
                    <img
                        src="/img/discover/fiesta.jpeg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                {/* Imagen larga abajo*/}
                <div className="bg-stone-900 col-span-1 sm:col-span-2">
                    <img
                        src="/img/marte.jpeg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>


                {/* Texto abajo */}
                <div className="overflow-hidden p-6">
                    <div>
                        <h3 className="uppercase text-sm font-semibold mb-2 tracking-wider">
                            GEIRANGAFJORDEN
                        </h3>
                        <p className="text-[#F5E9D3] text-sm leading-relaxed">
                            Located in the south-western part of Norway. Approximately 100 kilometers from the town of Ålesund.
                        </p>
                    </div>

                    <div className="mt-4 text-gray-400 text-xs flex gap-4 uppercase tracking-wide">
                        <button>Read more</button>
                        <button>Go to top</button>
                        <button>Share</button>
                    </div>
                </div>

            </div>






            {/* --- Galería de imágenes --- */}
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
                            src={img.src}
                            alt={img.alt}
                            className="object-cover w-full h-60 md:h-102 brightness-70 hover:brightness-110 transition-all duration-700"
                        />
                        <div className="flex flex-col gap-2 text-lg text-[#EBDDC0]">
                            <p className="flex items-center gap-2">
                                <FaLocationDot className="text-[#C1A87D]" /> Ubicacion
                            </p>

                        </div>
                    </div>
                ))}
            </div>

            {/* --- Botón de acción --- */}
            <div className="text-center">
                <Link
                    to="/gallery"
                    className="inline-block bg-[#C1A87D] text-stone-900 px-8 py-3 rounded-full text-lg font-semibold uppercase tracking-wide hover:bg-[#F5E9D3] transition-colors duration-500"
                >
                    Explorar el reflejo
                </Link>
            </div>
            <div>
                <img className="opacity-80 -mb-32" src="/img/discover/133.png" alt="martin pescador" />
            </div>





        </section>

    );
};

export default Discover;
