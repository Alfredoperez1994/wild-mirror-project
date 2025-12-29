import Footer from "../Footer/Footer";

const SoulComponent = () => {
    return (
        <section className="bg-stone-900 w-full flex flex-col">

            {/* --- HERO ATMOSFÉRICO SUPERIOR --- */}
            <div
                className="relative w-full h-[60vh] bg-fixed bg-top bg-cover"
                style={{ backgroundImage: 'url("img/agua_02.jpeg")' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-[#F5E9D3] italic text-4xl md:text-5xl tracking-widest font-semibold mb-6 uppercase opacity-80">
                        Alma
                    </h1>
                    <div className="w-12 h-1 bg-[#C1A87D]"></div>
                </div>

                {/* Fade hacia abajo */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-stone-900"></div>
            </div>


            {/* --- BLOQUE EDITORIAL PRINCIPAL --- */}
            <div className="max-w-6xl mx-auto px-6 md:px-0 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">

                {/* Imagen izquierda */}
                <div className="w-full md:w-1/2">
                    <img
                        src="img/soul/rama_01.jpeg"
                        alt="soul visual"
                        className=" shadow-xl object-cover w-full max-h-[420px]"
                    />
                </div>

                {/* Texto derecha */}
                <div className="w-full md:w-1/2 text-gray-200">
                    <h2 className="italic text-3xl md:text-4xl font-light mb-4">
                        Un Cambio <br /> Profundo
                    </h2>

                    <div className="w-10 h-0.5 bg-[#C1A87D] mb-6"></div>

                    <p className="text-gray-400 leading-relaxed">
                        Este proyecto nació de una transformación interna. Comprendí que la fotografía no solo muestra lo que está allá afuera, sino que también refleja lo que sucede adentro. Wild Mirror es eso: un espejo. De fauna, de paisajes, de misterio... pero también de alma.
                    </p>
                </div>

            </div>


            {/* --- TEXTO SUPERPUESTO INTERMEDIO --- */}
            <div
                className="relative w-full h-[50vh] bg-center bg-cover"
                style={{ backgroundImage: 'url("img/agua_02.jpeg")' }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <p className="text-[#F5E9D3] max-w-xl md:max-w-2xl text-3xl leading-relaxed italic opacity-70">
                        “Donde hay un alma salvaje, hay un reflejo de nosotros mismos.”
                    </p>
                </div>

                {/* Fade abajo */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-b from-transparent to-stone-900"></div>
            </div>



            {/* --- BLOQUE ENSAYO / NARRATIVA --- */}
            <div className="max-w-4xl mx-auto py-16 px-6 text-center">
                <h3 className="text-3xl font-semibold mb-6 tracking-wide text-[#F5E9D3]">
                    Nuestra conexión con lo salvaje
                </h3>

                <p className="text-lg text-[#F5E9D3] leading-relaxed mb-6">
                    Wild Mirror nace del deseo profundo de observar, comprender y respetar
                    a cada especie que comparte este mundo con nosotros. Cada retrato es
                    una invitación a detener el tiempo, a contemplar la belleza que existe
                    más allá del ruido humano.
                </p>

                <p className="text-lg text-[#F5E9D3] leading-relaxed mb-6">
                    La fotografía se convierte en puente: entre el animal y el espectador,
                    entre la naturaleza y la conciencia, entre lo que somos y lo que
                    estamos llamados a cuidar.
                </p>
            </div>


            {/* --- BLOQUE FINAL CON MISMA IMAGEN --- */}
            <div
                className="relative w-full h-[60vh] bg-fixed bg-bottom bg-cover"
                style={{ backgroundImage: 'url("img/agua_02.jpeg")' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
                    <p className="text-[#F5E9D3] max-w-xl md:max-w-2xl text-3xl leading-relaxed italic opacity-70">
                        Cuando la naturaleza habla, el alma escucha.
                        Cada fotografía guarda un instante que merece ser protegido.
                    </p>
                </div>
                <Footer />
            </div>

        </section>
    );
};

export default SoulComponent;
