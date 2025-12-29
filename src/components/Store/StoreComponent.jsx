const StoreComponent = () => {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center py-10 px-6">

            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <img
                    src="/img/sanacion.jpeg"
                    className="w-full h-full object-cover opacity-70"
                    alt="Background"
                />
                {/* Gradiente para oscurecer la imagen */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
            </div>

            {/* Contenedor principal */}
            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Imagen grande izquierda */}
                <div className="flex justify-center lg:justify-start relative">
                    <img
                        src="/img/vinculo_sagrado.jpeg"
                        className="w-[85%] ml-10 max-w-md rounded shadow-lg"
                        alt="Big Zebra"
                    />

                  
                </div>

                {/* Texto derecha */}
                <div className="text-white max-w-xl mx-auto lg:mx-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
                        PHOTO OF THE MONTH
                    </h1>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        A figure, every day, takes you to see different places around the
                        world, different wind shadows, different states of mind.
                    </p>

                    <button className="border border-white px-8 py-2 mt-2 hover:bg-white hover:text-black transition rounded">
                        EXPLORE
                    </button>
                </div>
            </div>

        </section>
    );
};

export default StoreComponent;
