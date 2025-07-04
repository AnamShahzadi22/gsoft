"use client";

import { useState, useEffect } from "react";
import { menuItems } from "@/json/navbar";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolledPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-cyan z-[9999]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navbar
        isMenuOpen={menuOpen}
        onMenuOpenChange={setMenuOpen}
        classNames={{
          base: `sticky top-0 z-[999] w-full transition-all ${
            scrolled
              ? "bg-navbg shadow-md"
              : "bg-transparent absolute top-0 left-0 w-full"
          } p-0 m-0`,
          wrapper: "w-full max-w-full px-6 mx-auto",
        }}
      >
        {/* Logo */}
       <NavbarBrand>
  <Link href="/">
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={170}
      height={100}
      className="object-contain "
    />
  </Link>
</NavbarBrand>

        {/* Desktop Menu */}
        <NavbarContent className="hidden xl:flex justify-center gap-10 " justify="center">
          {/* Company */}
         {menuItems.slice(0, 1).map((item) => {
  const isActive = pathname === item.href;
  return (
    <NavbarItem key={item.name}>
      <Button
        as={Link}
        href={item.href}
        variant="flat"
        className={`bg-transparent p-2 text-lg hover:bg-white/10 transition-all
          ${isActive ? "text-cyan " : "text-white"}`}
      >
        {item.name}
      </Button>
    </NavbarItem>
  );
})}

          {/* Services */}
          <NavbarItem>
            <ServicesDropdown />
          </NavbarItem>

          {/* Remaining Items */}
          {menuItems.slice(1).map((item) => {
  const isActive = pathname === item.href;
  return (
    <NavbarItem key={item.name}>
      <Button
        as={Link}
        href={item.href}
        variant="flat"
        className={`bg-transparent p-2 text-lg hover:bg-white/10 transition-all
          ${isActive ? "text-cyan " : "text-white"}`}
      >
        {item.name}
      </Button>
    </NavbarItem>
  );
})}

        </NavbarContent>

        {/* Right Side */}
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center gap-4">
            <div className="hidden xl:block">
              <Button
                as={Link}
                href="#"
                variant="bordered"
                className="text-white text-lg border-white  border-1 rounded  w-full hover:bg-white/10 "
              >
                Estimate Your Project
              </Button>
            </div>

            {/* Custom Menu Toggle (Mobile) */}
            <div className="xl:hidden">
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-xl p-2 focus:outline-none"
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-navbg border-t-1 border-cyan p-4 text-white  ">
          {menuItems.slice(0, 1).map((item, index) => (
            <NavbarMenuItem key={index} className="hover:text-cyan">
              <Link
                href={item.href}
                className="w-full block py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem >
            <ServicesDropdown />
          </NavbarMenuItem>

          {menuItems.slice(1).map((item, index) => (
            <NavbarMenuItem key={index} className="hover:text-cyan">
              <Link
                href={item.href}
                className="w-full block py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem>
            <Button
              as={Link}
              href="#"
              variant="bordered"
              className="text-white border-white  border-1 rounded  w-full hover:bg-white/10 "
              onClick={() => setMenuOpen(false)}
            >
              Estimate Your Project
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

     
      <div
        className="fixed top-16 left-0 h-[3px] bg-cyan z-[9999]"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </>
  );
};

export default NavBar;
