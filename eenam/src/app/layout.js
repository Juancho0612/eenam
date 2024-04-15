"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useReducer } from "react";
import CartProvider from "./contexts/CartContext";
import SidebarProvider from "./contexts/SidebarContext";
import ProductProvider from "./contexts/ProductContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const context = createContext();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <body className={inter.className}>
              <Header/>
              {children}
              <Sidebar/>
              <Footer/>
              </body>
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </html>
  );
}
