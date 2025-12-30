"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useIsMobile } from "../hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IoLogoWhatsapp } from "react-icons/io";
import { Menu } from "lucide-react";

const menus = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    submenu: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "Web App Development", href: "/services/web-app-development" },
      { title: "UI UX Design", href: "/services/ui-ux-design" },
      {
        title: "Website Optimization & Maintenance",
        href: "/services/website-optimization-maintenance",
      },
    ],
  },
  { title: "Work", href: "/work" },
  { title: "Insights", href: "/insights" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        isSticky ? "bg-white/80 dark:bg-black/70 backdrop-blur border-b" : "bg-transparent"
      }`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <Link href="/" className="relative h-8 w-36 shrink-0">
          <Image src="/logo.svg" alt="logo" fill className="object-contain" priority />
        </Link>

        <div className="flex-1" />

        {!isMobile && (
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menus.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    {!menu.submenu ? (
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={menu.href!}>{menu.title}</Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-64 gap-2 p-3">
                            {menu.submenu.map((sub) => (
                              <li key={sub.title}>
                                <Link
                                  href={sub.href}
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-muted transition">
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="gap-2 rounded-full bg-indigo-600 px-5 text-white hover:bg-indigo-700"
              onClick={() => {
                window.open("https://wa.me/6281361296979", "_blank");
              }}>
              Konsultasi Gratis
              <IoLogoWhatsapp />
            </Button>
          </div>
        )}

        {/* ===== MOBILE ===== */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-75 px-6">
              <SheetTitle></SheetTitle>

              <nav className="flex flex-col gap-6 mt-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {menus.map((menu) =>
                    menu.submenu ? (
                      <AccordionItem
                        key={menu.title}
                        value={menu.title}
                        className="border-none p-0">
                        <AccordionTrigger className="m-0 p-0">{menu.title}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 pl-4">
                          {menu.submenu.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="text-sm text-muted-foreground hover:text-foreground">
                              {sub.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={menu.title}
                        href={menu.href!}
                        className="text-sm block font-medium">
                        {menu.title}
                      </Link>
                    )
                  )}
                </Accordion>

                <Button
                  className="mt-6 gap-2 bg-indigo-600 text-white"
                  onClick={() => {
                    window.open("https://wa.me/6281361296979", "_blank");
                  }}>
                  Konsultasi Gratis
                  <IoLogoWhatsapp />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
}
