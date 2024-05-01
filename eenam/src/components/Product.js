import React, { useContext } from "react";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../app/contexts/CartContext";
import Link from "next/link";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border bg-white border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full mx-auto flex justify-center items-center">
            <img
              className="h-full group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-blue-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            href={`/products/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div className="text-left">
        <div className="tex-sm capitalize text-purple-300 mb-1">
          {category == "decoracion" ? "Decoración" : "Ropa dama"}
        </div>
        <Link href={`/products/${id}`}>
          <button>
            <h2 className="font-semibold mb-1">{title}</h2>
          </button>
        </Link>

        <h2 className="font-semibbold text-primary">$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
