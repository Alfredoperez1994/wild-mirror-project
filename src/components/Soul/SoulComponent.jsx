const SoulComponent = () => {
    return (
        <section className="relative bg-stone-900 w-full px-6 sm:px-12 py-24">
            {/* Bloque reutilizable */}
            <div className="space-y-24 max-w-6xl mx-auto">

                {/* BLOQUE 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-start  gap-10 bg-[url(img/tierra_48.jpeg)] bg-center rounded-lg p-6">


                    <div className=" text-[#F5E9D3] h-80 font-extrabold items-center p-4 rounded">
                        <h2 className="text-3xl mb-4 font-serif">¡Hola!, Soy Ramiro García</h2>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-[url(img/arde_sutil.jpeg)] rounded-lg p-6">
                    <img
                        src="/img/soul/rama_07.jpeg"
                        alt="Ramiro en la montaña"
                        className="w-full md:w-1/2 h-80 object-cover rounded"
                    />

                    <div className="text-stone-900 font-medium md:w-1/2 border-b-4 border-r-4 border-stone-900 p-4 rounded">
                        <h2 className="text-3xl mb-4 font-serif">¡Hola!, Soy Ramiro García</h2>
                        <p>
                            Viajero, fotógrafo y eterno aprendiz de la naturaleza. A través de mi lente busco capturar
                            no solo la belleza salvaje del mundo, sino también los silencios, las emociones y los mensajes
                            que la Tierra nos susurra cuando estamos dispuestos a escuchar.
                        </p>
                    </div>
                </div>

                {/* BLOQUE 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 bg-[url(img/gallery/gallery_31.jpeg)] rounded-lg p-6">
                    <img
                        src="/img/soul/rama_05.jpeg"
                        alt="Origen de Wild Mirror"
                        className="w-full md:w-1/2 h-80 object-cover rounded"
                    />

                    <div className="text-[#F5E9D3] font-medium md:w-1/2 border-b-4 border-l-4 border-stone-900 p-4 rounded">
                        <h2 className="text-3xl mb-4 font-serif">Un cambio profundo</h2>
                        <p>
                            Este proyecto nació de una transformación interna. Comprendí que la fotografía no solo muestra
                            lo que está allá afuera, sino que también refleja lo que sucede adentro. Wild Mirror es eso: un espejo.
                            De fauna, de paisajes, de misterio... pero también de alma.
                        </p>
                    </div>
                </div>

                {/* BLOQUE 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-[url(img/tierra_57.jpeg)] rounded-lg p-6">
                    <img
                        src="/img/soul/rama_06.jpeg"
                        alt="Valores y propósito"
                        className="w-full md:w-1/2 h-80 object-cover rounded"
                    />

                    <div className="text-stone-900 font-medium md:w-1/2 border-b-4 border-r-4 border-stone-900 p-4 rounded">
                        <h2 className="text-3xl mb-4 font-serif">El propósito detrás</h2>
                        <p>
                            Cada imagen que comparto es un intento de volver a sentir. Mis valores están profundamente ligados
                            a la conservación, el respeto por todos los seres vivos, la comunidad y la acción desde el amor.
                            Quiero inspirar a otros a ver la fragilidad y la fuerza de los ecosistemas.
                        </p>
                    </div>
                </div>

                {/* BLOQUE 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 bg-[url(img/agua_10.jpeg)] rounded-lg p-6">
                    <img
                        src="/img/discover/aire_42.jpeg"
                        alt="Wild Mirror como camino"
                        className="w-full md:w-1/2 h-80 object-cover rounded"
                    />

                    <div className="text-[#F5E9D3] font-medium md:w-1/2 border-b-4 border-l-4 border-stone-900 p-4 rounded">
                        <h2 className="text-3xl mb-4 font-serif">Wildlife Photography</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus placeat quos eius excepturi neque harum vel
                            explicabo dicta nisi inventore, sed dolor velit aliquam, distinctio veniam, assumenda itaque maxime a.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SoulComponent;
