import "./SoulComponent.css";

const SoulComponent = () => {
    return (
        <section className="soul">
            {/* Bloque 1 - Presentación */}
            <div className="soul__block">
                <img src="/img/soul/rama_07.jpeg" alt="Ramiro en la montaña" className="soul__image" />
                <div className="soul__text">
                    <h2>¡Hola!, Soy Ramiro García</h2>
                    <p>
                        Viajero, fotógrafo y eterno aprendiz de la naturaleza. A través de mi lente busco capturar
                        no solo la belleza salvaje del mundo, sino también los silencios, las emociones y los mensajes
                        que la Tierra nos susurra cuando estamos dispuestos a escuchar.
                    </p>
                </div>
            </div>

            {/* Bloque 2 - El origen de Wild Mirror */}
            <div className="soul__block soul__block--reverse">
                <img src="/img/soul/rama_05.jpeg" alt="Origen de Wild Mirror" className="soul__image" />
                <div className="soul__text">
                    <h2>Un cambio profundo</h2>
                    <p>
                        Este proyecto nació de una transformación interna. Comprendí que la fotografía no solo muestra
                        lo que está allá afuera, sino que también refleja lo que sucede adentro. Wild Mirror es eso: un espejo.
                        De fauna, de paisajes, de misterio... pero también de alma.
                    </p>
                </div>
            </div>

            {/* Bloque 3 - Propósito */}
            <div className="soul__block">
                <img src="/img/soul/rama_06.jpeg" alt="Valores y propósito" className="soul__image" />
                <div className="soul__text">
                    <h2>El propósito detrás</h2>
                    <p>
                        Cada imagen que comparto es un intento de volver a sentir. Mis valores están profundamente ligados
                        a la conservación, el respeto por todos los seres vivos, la comunidad y la acción desde el amor.
                        Quiero inspirar a otros a ver la fragilidad y la fuerza de los ecosistemas.
                    </p>
                </div>
            </div>

            {/* Bloque 4 - Wild Mirror como camino */}
            <div className="soul__block soul__block--reverse">
                <img src="/img/soul/landscape.jpeg" alt="Wild Mirror como camino" className="soul__image" />
                <div className="soul__text">
                    <h2>Wild Mirror</h2>
                    <p>
                        Wild Mirror no es solo fotografía. Es una búsqueda viva, un puente entre la naturaleza y el alma.
                        Invita a mirar y a sentir. A preguntarnos qué se mueve dentro nuestro cuando nos encontramos con
                        lo salvaje, con lo libre, con lo esencial. Es arte como puente. Es vida que se observa a sí misma.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SoulComponent;
