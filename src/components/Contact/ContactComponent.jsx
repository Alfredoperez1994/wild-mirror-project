
import { useState } from "react";

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setSubmitted(false);
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!formData.email.trim()) {
            newErrors.email = "El email es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El email no es válido.";
        }
        if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
            return;
        }

        setErrors({});
        try {
            const response = await fetch("https://formspree.io/f/xblkrlbq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitted(false);
                alert("Hubo un problema al enviar el mensaje. Intentá de nuevo.");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Error de conexión. Por favor intentá más tarde.");
        }
    };

    return (
        <section
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('/img/background_image2.jpeg')]"
        >


            {/* 🟩 Contenedor del formulario */}
            <div className="relative z-10 w-full max-w-lg mx-4 bg-stone-800/70 rounded-3xl shadow-xl p-10 text-[#F5E9D3]">
                <h2 className="text-3xl font-mono uppercase text-center mb-6 tracking-widest">
                    Dejá tu mensaje
                </h2>
                <p className="text-xl font-serif text-center mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde porro sint id.</p>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* Campo Nombre */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre completo"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-stone-900/70 border border-[#C1A87D]/30 rounded-lg focus:outline-none focus:border-[#C1A87D] text-[#F5E9D3] placeholder-[#C1A87D]/60"
                        />
                        {errors.name && (
                            <span className="text-red-400 text-sm">{errors.name}</span>
                        )}
                    </div>

                    {/* Campo Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-stone-900/70 border border-[#C1A87D]/30 rounded-lg focus:outline-none focus:border-[#C1A87D] text-[#F5E9D3] placeholder-[#C1A87D]/60"
                        />
                        {errors.email && (
                            <span className="text-red-400 text-sm">{errors.email}</span>
                        )}
                    </div>

                    {/* Campo Mensaje */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Tu mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full p-3 bg-stone-900/70 border border-[#C1A87D]/30 rounded-lg focus:outline-none focus:border-[#C1A87D] text-[#F5E9D3] placeholder-[#C1A87D]/60"
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-400 text-sm">{errors.message}</span>
                        )}
                    </div>

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#C1A87D] text-stone-900 py-3 rounded-full font-semibold uppercase tracking-widest hover:bg-[#F5E9D3] transition-all duration-300"
                    >
                        Enviar mensaje
                    </button>

                    {/* Mensaje de éxito */}
                    {submitted && (
                        <p className="text-center text-green-400 mt-3">
                            ✅ Mensaje enviado con éxito.
                        </p>
                    )}
                </form>
            </div>

                   <div className="absolute max-w-6xl w-full mx-auto flex flex-col mt-95 md:flex-row items-center md:items-end gap-12 px-15 py-12">

                {/* BLOQUE DE IMÁGENES SUPERPUESTAS */}
                <div className="relative w-full md:w-auto flex justify-center md:justify-start">
                    {/* Imagen grande */}
                    <img
                        src="/img/espiritu_10.jpeg"
                        alt="Curso Inalterable"
                        loading="lazy"
                        className="w-64 md:w-80 lg:w-96 shadow-xl relative z-20 mt-8 md:mt-12"

                    />

                    {/* Imagen chica superpuesta */}
                    <img
                        src="/img/espiritu_09.jpeg"
                        alt="Sanación"
                        loading="lazy"
                        className="w-52 md:w-72 lg:w-80 shadow-xl absolute left-10 top-24 md:-left-10 md:top-32 z-30  transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* TARJETA DETRÁS */}
                <div className="bg-[#2a2a2a] text-gray-200 p-8 shadow-xl relative z-10 -mt-16 md:-mt-24 md:-ml-20 w-full md:w-[380px] max-w-md transition-all duration-300">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 text-right mt-10">
                        Un Cambio <br /> Profundo
                    </h2>

                    <div className="w-10 h-0.5 bg-[#C1A87D] mb-4 ml-auto"></div>

                    <p className="text-gray-400 leading-relaxed text-right mb-10 m-3">
                        Este proyecto nació de una transformación interna. Comprendí que la fotografía no solo muestra lo que está allá afuera, sino que también refleja lo que sucede adentro. Wild Mirror es eso: un espejo. De fauna, de paisajes, de misterio... pero también de alma.
                    </p>
                </div>
            </div>



            <div className="relative max-w-6xl w-full mx-auto flex flex-col justify-end mt-95 md:flex-row items-center md:items-end gap-10 px-10 py-15">

                {/* TARJETA DETRÁS */}
                <div className="bg-[#2a2a2a] text-gray-200 p-8 shadow-xl relative z-10 -mt-16 md:-mt-24 md:-mr-20 w-full md:w-[380px] max-w-md transition-all duration-300  order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 text-start mt-10">
                        El propósito <br />  Detrás
                    </h2>

                    <div className="w-10 h-0.5 bg-[#C1A87D] mb-4"></div>

                    <p className="text-gray-400 leading-relaxed text-start mb-10 m-3">
                        Cada imagen que comparto es un intento de volver a sentir. Mis valores están profundamente ligados a la conservación, el respeto por todos los seres vivos, la comunidad y la acción desde el amor. Quiero inspirar a otros a ver la fragilidad y la fuerza de los ecosistemas.
                    </p>
                </div>

                {/* BLOQUE DE IMÁGENES SUPERPUESTAS */}
                <div className="relative w-full md:w-auto flex justify-center md:justify-end order-1 md:order-2">
                    {/* Imagen grande */}
                    <img
                        src="/img/fuego_04.jpeg"
                        alt="Curso Inalterable"
                        loading="lazy"
                        className="w-64 md:w-80 lg:w-96 shadow-xl relative z-20 mt-8 md:mt-12"

                    />

                    {/* Imagen chica superpuesta (más abajo) */}
                    <img
                        src="/img/tierra_38.jpeg"
                        alt="Sanación"
                        loading="lazy"
                        className="w-52 md:w-72 lg:w-80 shadow-xl absolute right-10 top-32 md:-right-10 md:top-44 z-30 transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            
        </section>
    );
};

export default ContactComponent;
