import { useState } from "react";
import "./ContactComponent.css";

const ContactComponent = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Estado para manejar errores de validación
    const [errors, setErrors] = useState({});

    // Estado para mostrar mensaje de éxito
    const [submitted, setSubmitted] = useState(false);

    // Maneja los cambios en los inputs y actualiza el estado
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setSubmitted(false); // Oculta el mensaje de éxito si el usuario vuelve a escribir
    };

    // Validaciones básicas de campos vacíos y formato de email
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

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación antes de enviar
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
            return;
        }

        // Si no hay errores, se limpia el estado de errores
        setErrors({});

        try {
            // Enviar los datos a Formspree usando fetch
            const response = await fetch("https://formspree.io/f/xblkrlbq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            // Si el servidor responde OK, se resetea el formulario
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
        <section className="contact">
            <div className="contact__container">
                <h2 className="contact__title">Dejame tu mensaje</h2>

                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                    {/* Campo de nombre */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact__input"
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}

                    {/* Campo de email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact__input"
                    />
                    {errors.email && <span className="contact__error">{errors.email}</span>}

                    {/* Campo de mensaje */}
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact__textarea"
                        rows="5"
                    ></textarea>
                    {errors.message && <span className="contact__error">{errors.message}</span>}

                    {/* Campo invisible anti-spam (opcional) */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    {/* Botón de envío */}
                    <button type="submit" className="contact__button">Enviar</button>

                    {/* Mensaje de éxito */}
                    {submitted && (
                        <p className="contact__success">✅ Mensaje enviado con éxito.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactComponent;
