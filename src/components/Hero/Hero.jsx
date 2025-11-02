import React from 'react'
import logo from "/img/logo.png";

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url(/img/hero_02.jpeg)] bg-fixed" >


            {/* Degradado inferior para transición suave */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-stone-900 to-transparent" />

            {/* 🔲 Logo centrado */}
            <div className="relative z-10 flex flex-col items-center">
                <img
                    src={logo}
                    alt="WildMirror Logo"
                    className="w-08 md:w-134 lg:w-180 opacity-20 animate-fade-in"
                />

            </div>
        </section>
    );
};

export default Hero