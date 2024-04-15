"use client";
import Product from "@/components/Product";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const { products } = useContext(ProductContext);

  // get only men's and women's clothing category
  const filteredProducts = Array.isArray(products) ? products.filter((item) => {
    return item;
  }) : [];

  return (
    <div>
      <Hero />
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explora nuestros productos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
