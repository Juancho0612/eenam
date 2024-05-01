'use client';
import Product from "@/components/Product";
import { useContext } from "react";
import { ProductContext } from "@/app/contexts/ProductContext";

export default function Clothe() {
  const { products } = useContext(ProductContext);

  // Filtrar productos de la categoría "decoracion"
  const filteredProducts = Array.isArray(products)
    ? products.filter((item) => item.category === "decoracion")
    : [];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto text-center">
        {/* Título con degradado */}
        <h1 className="text-3xl font-semibold mb-10 relative inline-block">
          <span className="bg-gradient-to-r from-purple-400 via-primary to-button text-transparent bg-clip-text">
            DECORACIONES
          </span>
        </h1>

        {/* Cuadrícula de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-screen-lg mx-auto">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
