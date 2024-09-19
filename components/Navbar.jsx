import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function MyNavbar() {
  return (
    <Navbar shouldHideOnScroll className="bg-slate-100">
      {/* Marca */}
      <NavbarBrand>
        <p className="text-slate-900 font-black">
          Olivieri
          <span className=" text-slate-500 font-semibold">Risk</span>
          Advisors
        </p>
      </NavbarBrand>

      {/* Conteúdo do Navbar distribuído */}
      <NavbarContent className="w-full justify-between">
        <div className="flex items-center gap-4">
          <NavbarItem isActive>
            <Link href="/posts">Home</Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/contact">Seguro Empresarial</Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/contact">Benefícios</Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/contact">Parceiros</Link>
          </NavbarItem>
        </div>

        {/* Último item à direita */}
        <NavbarItem>
          <Link href="/contact">Contato</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
