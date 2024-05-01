import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { SidebarContext } from "@/app/contexts/SidebarContext";
import { CartContext } from "@/app/contexts/CartContext";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para controlar el menú de hamburguesa
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCartSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado del menú de hamburguesa
  };

  return (
    <header
      className={`${
        isActive ? "bg-bg py-2 shadow-md" : "bg-white"
      } fixed w-full  lg:px-8 transition-all items-center z-50`}
    >
      <div className="container flex justify-between items-center mx-auto">
        <Link href={"/"}>
          <div className="w-[120px]">
            <img src="/img/logo.png" alt="Logo" />
          </div>
        </Link>
        <div className="hidden lg:flex space-x-3">
          <Link href={"/eenam"}>
            <button className="bg-button text-white px-2 py-2 rounded-lg">
              Quienes somos
            </button>
          </Link>
          <Link href={"/products/decoraciones"}>
            <button className="bg-button text-white px-2 py-2 rounded-lg">
              Decoraciones y detalles
            </button>
          </Link>
          <Link href={"/products/ropa"}>
            <button className="bg-button text-white px-2 py-2 rounded-lg">
              Fashion moda
            </button>
          </Link>
        </div>
        <div className="flex items-">
          <Link href={"/login"}>
            <button className="cursor-pointer mr-4">
              <FaRegUserCircle className="text-3xl text-black" />
            </button>
          </Link>

          <div onClick={toggleCartSidebar} className="cursor-pointer relative">
            <BsBag className="text-3xl text-black" />
            <div className="bg-red-500 absolute -right-1 -bottom-1 text-xs w-5 h-5 text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              &#9776; {/* Icono de hamburguesa */}
            </button>
          </div>
        </div>
      </div>
      {/* Menú de hamburguesa */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-8 absolute top-16 right-0 left-0 z-50">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href={"/eenam"}>
                <button className="text-purple-900 rounded hover:bg-button hover:text-white">
                  Quienes somos
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/products/decoraciones"}>
                <button className="text-purple-900 rounded hover:bg-button hover:text-white">
                  Decoraciones y detalles
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/products/ropa"}>
                <button className="text-purple-900 rounded hover:bg-button hover:text-white">
                  Fashion moda
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
