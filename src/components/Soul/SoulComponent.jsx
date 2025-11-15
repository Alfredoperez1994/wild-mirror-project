

const SoulComponent = () => {
    return (
        <section className="relative bg-stone-900 w-screen p-16 bg-[url(img/discover/tierra_64.jpeg)] bg-no-repeat">

            

                {/* Bloque 1 - Presentación */}
                <div className="flex flex-wrap items-center justify-center gap-12 mb-16 mt-36 bg-stone-800 rounded-xs">
                    <img src="/img/soul/rama_07.jpeg" alt="Ramiro en la montaña" className="flex-1 object-cover max-w-md ml-9" />
                    <div className="flex-1 text-[#F5E9D3] max-w-2xl font-medium border-b-4 border-r-4 border-red-900 mr-3">
                        <h2 className="text-3xl mb-4 font-sans">¡Hola!, Soy Ramiro García</h2>
                        <p>
                            Viajero, fotógrafo y eterno aprendiz de la naturaleza. A través de mi lente busco capturar
                            no solo la belleza salvaje del mundo, sino también los silencios, las emociones y los mensajes
                            que la Tierra nos susurra cuando estamos dispuestos a escuchar.
                        </p>
                    </div>
                </div>

                {/* Bloque 2 - El origen de Wild Mirror */}
                <div className="flex flex-wrap items-center justify-center gap-12 mb-16 flex-row-reverse  bg-stone-700 rounded-xs">
                    <img src="/img/soul/rama_05.jpeg" alt="Origen de Wild Mirror" className="flex-1 object-cover max-w-md mr-9" />
                    <div className="flex-1 text-[#F5E9D3] max-w-2xl font-medium border-b-4 border-l-4 border-red-900 ml-3">
                        <h2 className="text-3xl mb-4 font-sans">Un cambio profundo</h2>
                        <p>
                            Este proyecto nació de una transformación interna. Comprendí que la fotografía no solo muestra
                            lo que está allá afuera, sino que también refleja lo que sucede adentro. Wild Mirror es eso: un espejo.
                            De fauna, de paisajes, de misterio... pero también de alma.
                        </p>
                    </div>
                </div>

                {/* Bloque 3 - Propósito */}
                <div className="flex flex-wrap items-center justify-center gap-12 mb-16  bg-stone-800 rounded-xs">
                    <img src="/img/soul/rama_06.jpeg" alt="Valores y propósito" className="flex-1 object-cover max-w-md ml-9" />
                    <div className="flex-1 text-[#F5E9D3] max-w-2xl font-medium border-b-4 border-r-4 border-red-900 mr-3">
                        <h2 className="text-3xl mb-4 font-sans">El propósito detrás</h2>
                        <p>
                            Cada imagen que comparto es un intento de volver a sentir. Mis valores están profundamente ligados
                            a la conservación, el respeto por todos los seres vivos, la comunidad y la acción desde el amor.
                            Quiero inspirar a otros a ver la fragilidad y la fuerza de los ecosistemas.
                        </p>
                    </div>
                </div>

                {/* Bloque 4 - Wild Mirror como camino */}
                <div className="flex flex-wrap items-center justify-center gap-12 mb-16 flex-row-reverse  bg-stone-700 rounded-xs">
                    <img src="/img/discover/aire_42.jpeg" alt="Wild Mirror como camino" className="flex-1 object-cover max-w-md mr-9" />
                    <div className="flex-1 text-[#F5E9D3] max-w-2xl font-medium border-b-4 border-l-4 border-stone-900 ml-3">
                        <h2 className="text-3xl mb-4 font-sans">Wildlife Photography</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus placeat quos eius excepturi neque harum vel explicabo dicta nisi inventore, sed dolor velit aliquam, distinctio veniam, assumenda itaque maxime a.
                        </p>
                    </div>
                </div>
            
        </section>
    );
};

export default SoulComponent;
