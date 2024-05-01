"use client";
import React, { useContext } from "react";
import Product from "@/components/Product";
import Hero from "@/components/Hero";
import {
  FaBirthdayCake,
  FaHeart,
  FaPercentage,
  FaStar,
  FaTag,
  FaTshirt,
} from "react-icons/fa";
import { ProductContext } from "./contexts/ProductContext";
import VideoPlayer from "@/components/VideoPlayer ";
import Testimonial from "@/components/Testimonial ";
export default function Home() {
  const { products } = useContext(ProductContext);

  const decoracionProducts = products
    .filter((product) => product.category === "decoracion")
    .slice(0, 3);

  const ropaProducts = products
    .filter((product) => product.category === "ropa")
    .slice(0, 3);

  const videos = [
    {
      id: 1,
      title: "Decoraciones Especiales",
      videoUrl: "/img/video1.mp4",
    },
    {
      id: 2,
      title: "Colección de Ropa",
      videoUrl: "/img/video2.mp4",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "¡Me encantó la decoración para mi fiesta! Fue perfecta.",
      author: "María González",
    },
    {
      id: 2,
      text: "La ropa es de excelente calidad. ¡Recomendado!",
      author: "Carlos Martínez",
    },
    {
      id: 23,
      text: "Mis grados con Eenam  fueron inigualables",
      author: "Sandra Zapata",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Sección de Videos */}
      <section className="pt-20 pb-12 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-10 relative inline-block">
            <span className="bg-gradient-to-r from-button via-primary to-purple-400 text-transparent bg-clip-text">
              Nuestro Trabajo
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id}>
                <VideoPlayer
                  title={video.title}
                  videoUrl={video.videoUrl}
                  muted
                  className="w-full rounded-lg overflow-hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-10 relative inline-block">
            <span className="bg-gradient-to-r from-purple-400 via-primary to-button text-transparent bg-clip-text">
              Testimonios
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                text={testimonial.text}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección adicional en el Hero */}
      <section className="py-20 bg-indigo-950 bg-no-repeat bg-center">
        <div className="container mx-auto text-center text-white">
          {/* Primera fila de íconos */}
          <div className="flex justify-between space-x-6 mb-12">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-4">
                {/* Icono representativo de decoraciones personalizadas */}
                <FaBirthdayCake className="text-white text-3xl md:text-4xl lg:text-5xl" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ml-2">
                Decoraciones personalizadas
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-4">
                {/* Icono representativo de ideas para momentos especiales */}
                <FaHeart className="text-white text-3xl md:text-4xl lg:text-5xl" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ml-2">
                Ideas para momentos especiales
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-500 rounded-full p-4">
                {/* Icono representativo de calidad y atención al detalle */}
                <FaStar className="text-white text-3xl md:text-4xl lg:text-5xl" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ml-2">
                Calidad y atención al detalle
              </p>
            </div>
          </div>

          {/* Segunda fila de íconos */}
          <div className="flex justify-between space-x-6">
            <div className="flex items-center">
              <div className="bg-purple-500 rounded-full p-4">
                {/* Icono representativo de ropa de calidad */}
                <FaTshirt className="text-white text-3xl md:text-4xl lg:text-5xl" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ml-2">
                Ropa de calidad
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-red-500 rounded-full p-4">
                {/* Icono representativo de las mejores marcas */}
                <FaTag className="text-white text-3xl md:text-4xl lg:text-5xl" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ml-2">
                Las mejores marcas
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-indigo-500 rounded-full p-4">
                {/* Icono representativo de grandes ofertas */}
                <FaPercentage className="text-white text-3xl md:text-4xl lg:text-5xl" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ml-2">
                Grandes ofertas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explora nuestros productos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {decoracionProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
            {ropaProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
