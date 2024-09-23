"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar shouldHideOnScroll className="bg-slate-100">
      {/* Marca */}
      <NavbarBrand>
        <p className="text-slate-900 font-black">
          Olivieri
          <span className="text-slate-500 font-semibold">Risk</span>
          Advisors
        </p>
      </NavbarBrand>

      {/* Botão Hamburguer para Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-slate-900 focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Conteúdo do Navbar distribuído */}
      <NavbarContent
        className={`w-full lg:flex justify-between items-center ${isMenuOpen ? 'flex' : 'hidden'} lg:flex bg-slate-100 lg:bg-transparent flex-col lg:flex-row mt-4 lg:mt-0`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-center lg:text-left">
          <NavbarItem isActive>
            <Link
              href="/posts"
              className="text-slate-900 hover:text-slate-600 transition-colors duration-300 py-2 lg:py-0"
            >
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/contact"
              className="text-slate-900 hover:text-slate-600 transition-colors duration-300 py-2 lg:py-0"
            >
              Seguro Empresarial
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/contact"
              className="text-slate-900 hover:text-slate-600 transition-colors duration-300 py-2 lg:py-0"
            >
              Benefícios
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/contact"
              className="text-slate-900 hover:text-slate-600 transition-colors duration-300 py-2 lg:py-0"
            >
              Parceiros
            </Link>
          </NavbarItem>
        </div>

        {/* Último item à direita */}
        <NavbarItem>
          <Link
            href="/contact"
            className="text-slate-900 hover:text-slate-600 transition-colors duration-300 py-2 lg:py-0"
          >
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
