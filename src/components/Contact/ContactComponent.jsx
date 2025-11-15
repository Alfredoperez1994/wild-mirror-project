
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
        </section>
    );
};

export default ContactComponent;
