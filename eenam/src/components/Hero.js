import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-center items-center h-full">
        {/* Contenedor de texto */}
        <div className="text-center text-white">
          <h1 className="uppercase text-5xl md:text-7xl leading-tight font-bold mb-6">
            Decoraciones para cada ocasión
          </h1>

          <Link href={"/eenam"}>
            <button className="uppercase font-semibold border-b-2 border-white text-white  hover:bg-button rounded-xl px-6 py-3">
              Descubre más
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
