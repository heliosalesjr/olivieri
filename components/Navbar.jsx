import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function MyNavbar() {
  return (
    <Navbar shouldHideOnScroll className="bg-slate-100">
      <NavbarBrand>
        
        <p className="text-slate-900 font-black">Olivieri<span className=" text-slate-500 font-semibold">Risk</span>Advisors</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/posts">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/contact" aria-current="page">
            Seguro Empresarial
          </Link>
        </NavbarItem>

        <NavbarItem >
          <Link href="/contact" aria-current="page">
            Benefícios
          </Link>
        </NavbarItem>

        <NavbarItem >
          <Link href="/contact" aria-current="page">
            Parceiros
          </Link>
        </NavbarItem>

        <NavbarItem >
          <Link href="/contact" aria-current="page">
            Contato
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
       
        
      </NavbarContent>
    </Navbar>
  );
}
