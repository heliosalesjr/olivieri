'use client'
import React from "react";
import { Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, NavbarBrand } from "@nextui-org/react";
import { usePathname } from 'next/navigation';

export default function NewNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Seguro Empresarial", href: "/a" },
    { label: "Benefícios", href: "/s" },
    { label: "Parceiros", href: "/d" },
    { label: "Contato", href: "/f" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="px-4 bg-white bg-opacity-40" // Ajuste de padding horizontal
    >
      {/* Container principal com logo e ícone do menu hambúrguer */}
      <div className="flex w-full justify-between items-center ">
        {/* Logo à esquerda */}
        <NavbarBrand>
          <p className="text-slate-900 font-black">
            Olivieri
            <span className="text-sky-600 font-bold">Risk</span>
            Advisors
          </p>
        </NavbarBrand>

        {/* Ícone do menu hambúrguer à direita com área clicável aumentada */}
        <div className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-3 hover:bg-gray-200 rounded-full transition duration-300 ease-in-out"
            style={{ minWidth: "44px", minHeight: "44px" }} // Tamanho mínimo recomendado
          />
        </div>
      </div>

      {/* Links para telas maiores */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              href={link.href}
              className={`transition-all duration-500 ease-in-out hover:text-blue-900 hover:font-semibold ${
                pathname === link.href ? 'border-b-3 border-primary font-semibold text-primary-focus' : ''
              }`}
              color="foreground"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Menu para telas pequenas com background */}
      <NavbarMenu className="bg-white bg-opacity-40 backdrop-blur-md">
        {links.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={link.href}
              size="lg"
              style={{ display: 'block', textAlign: 'center' }}
              className={`font-semibold text-primary-focus py-4 hover:text-sky-900  ${
                pathname === link.href ? 'border-b-3 border-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
