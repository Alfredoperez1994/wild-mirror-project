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
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-24 ">
                <div className="flex flex-col gap-4 text-left">
                    <h1 className="font-mono text-3xl md:text-5xl uppercase tracking-widest mb-4">
                        Lo que la Naturaleza refleja en nosotros
                    </h1>
                    <p className="w-120">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolorum sint id hic, officiis molestiae facere odit mollitia consequatur ad suscipit consequuntur eligendi ratione? Esse sit veritatis soluta ducimus quo distinctio, tempora consequuntur rem fugiat amet nulla illo laboriosam cum ea! Sunt, iusto obcaecati rerum praesentium et ut neque voluptate magni dicta est animi labore minima sequi repudiandae exercitationem! Ut saepe fuga debitis at dolorem quaerat officia magni perspiciatis. Similique accusantium nam repellendus fugit tenetur sunt veniam sapiente, magnam quaerat ipsa sed ducimus, ullam doloremque dolorum animi expedita pariatur architecto consectetur, numquam culpa ratione ad atque earum nobis. Voluptatibus, officia.</p>
                </div>

                {/* Imagen destacada */}
                <div className="relative mt-12 md:mt-0 md:ml-10">
                    <img
                        src="/img/discover/tierra_17.jpeg"
                        alt="Naturaleza"
                        className="object-cover rounded-sm border-4 border-[#F5E9D3] h-96 w-80 md:h-100 md:w-240 lg:w-200 lg:h-120 xl:w-180 xl:h-150 shadow-xl/100 shadow-black hover:scale-105 transition-transform duration-700"
                    />
                    <img
                        src="/img/logo.png"
                        alt="Wild Mirror Logo"
                        className="absolute bottom-0 right-0 z-10 h-10 md:h-18 opacity-30"
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

            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center mb-32">

                {/* Imagen destacada */}
                <div className="relative mt-12 md:mt-0 md:mr-10 md:w-1/2 flex justify-center">
                    <img
                        src="/img/discover/tierra_58.jpeg"
                        alt="Naturaleza"
                        className="object-cover rounded-sm border-4 border-[#F5E9D3] h-96 w-80 md:h-120 md:w-88 lg:w-104 shadow-xl shadow-black hover:scale-105 transition-transform duration-700"
                    />
                    <img
                        src="/img/logo.png"
                        alt="Wild Mirror Logo"
                        className="absolute bottom-0 left-20 z-10 h-10 md:h-18 opacity-30"
                    />
                </div>


                <div className="flex flex-col gap-4 text-left md:w-1/2">
                    <h2 className="font-mono text-3xl md:text-5xl uppercase tracking-widest mb-4">
                        Cada especie, Cada paisaje como un reflejo donde vernos
                    </h2>
                    <p className="leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolorum sint id hic, officiis molestiae facere odit mollitia consequatur ad suscipit consequuntur eligendi ratione? Esse sit veritatis soluta ducimus quo distinctio, tempora consequuntur rem fugiat amet nulla illo laboriosam cum ea! Sunt, iusto obcaecati rerum praesentium et ut neque voluptate magni dicta est animi labore minima sequi repudiandae exercitationem! Ut saepe fuga debitis at dolorem quaerat officia magni perspiciatis. Similique accusantium nam repellendus fugit tenetur sunt veniam sapiente, magnam quaerat ipsa sed ducimus, ullam doloremque dolorum animi expedita pariatur architecto consectetur, numquam culpa ratione ad atque earum nobis. Voluptatibus, officia.</p>
                </div>


            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-32">

          
                <div className="flex flex-col gap-4 text-left md:w-1/2 md:pr-10">
                    <h2 className="font-mono text-3xl md:text-5xl uppercase tracking-widest mb-4">
                        Wild Mirror
                    </h2>
                    <p className="leading-relaxed">
                        Wild Mirror no es solo fotografía. Es una búsqueda viva, un puente entre la naturaleza y el alma.
                        Invita a mirar y a sentir. A preguntarnos qué se mueve dentro nuestro cuando nos encontramos con
                        lo salvaje, con lo libre, con lo esencial. Es arte como puente. Es vida que se observa a sí misma.
                    </p>
                </div>

                <div className="relative mt-12 md:mt-0 md:ml-10 md:w-1/2 flex justify-center">
                    <img
                        src="/img/discover/tierra_19.jpeg"
                        alt="Naturaleza"
                        className="object-cover rounded-sm border-4 border-[#F5E9D3] h-96 w-80 md:h-120 md:w-88 lg:w-104 shadow-xl shadow-black hover:scale-105 transition-transform duration-700"
                    />
                    <img
                        src="/img/logo.png"
                        alt="Wild Mirror Logo"
                        className="absolute bottom-0 right-20 z-10 h-10 md:h-18 opacity-30"
                    />
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
