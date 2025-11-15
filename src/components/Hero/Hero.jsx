import React from "react";
import logo from "/img/logo.png";

const Hero = () => {
    return (
        <section
            className="relative min-h-[100dvh] w-full flex items-center justify-center 
                 bg-cover bg-center bg-[url('/img/hero_02.jpeg')] 
                 md:bg-fixed overflow-hidden"
        >
            {/* 🌓 Degradado inferior suave */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-900 to-transparent"></div>

            {/* 🔲 Logo centrado */}
            <div className="relative z-10 flex flex-col items-center px-4">
                <img
                    src={logo}
                    alt="WildMirror Logo"
                    className="w-96 sm:w-72 md:w-[28rem] lg:w-[34rem] opacity-20 animate-fade-in"
                />
            </div>
        </section>
    );
};

export default Hero;
