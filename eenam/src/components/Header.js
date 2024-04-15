import React, { useContext, useEffect, useState } from "react";
import { Logo } from "../../public/img/logo.png";
import { BsBag } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { SidebarContext } from "@/app/contexts/SidebarContext";
import { CartContext } from "@/app/contexts/CartContext";
import Link from "next/link";
const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("is open" + isOpen)
  };

  return (
    <header
      className={`${
        isActive ? "bg-bg py-10 shadow-md" : "bg-none py-2"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-10 mt-12 flex items-center justify-between h-12 ">
        <Link href={"/"}>
          <div className="w-[280px]">
            <img src={"/img/logo.png"} alt="" />
          </div>
        </Link>
        <div className="">
          <button className="bg-button text-white px-2 py-2 rounded-lg mr-2">
            Quienes somos
          </button>

          <button className="bg-button text-white px-2 py-2 rounded-lg mr-2">
            Decoraciones y detalles
          </button>

          <button className="bg-button text-white px-2 py-2 rounded-lg mr-2">
            Fashion moda
          </button>
        </div>

        <div className="flex items-center">
          <div
            
            className="cursor-pointer flex relative pr-4"
          >
            <FaRegUserCircle className="text-4xl text-black" />
          </div>

          <div
            onClick={toggleSidebar}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-4xl text-black" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
