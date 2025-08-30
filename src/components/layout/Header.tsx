"use client";

import { Calendar, Instagram, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BRAND } from "@/constants/brand";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookingClick = () => {
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 text-xl font-bold text-primary hover:text-primary/90 transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Gold Mustache Logo"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </div>
          <span className="hidden sm:inline-block">Gold Mustache</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Início
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#servicos"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Serviços
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#trabalhos"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Trabalhos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#contatoLocalizacao"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Contato & Localização
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link
              href={BRAND.instagram.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </Link>
          </Button>
          <Button
            onClick={handleBookingClick}
            className="flex items-center space-x-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Agendar</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 text-lg font-bold text-primary">
                  <div className="h-8 w-8 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Gold Mustache Logo"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="font-playfair">Gold Mustache</span>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    href="#servicos"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Serviços
                  </Link>
                  <Link
                    href="#galeria"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Galeria
                  </Link>
                  <Link
                    href="/contato"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </Link>
                </nav>

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tema</span>
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link
                      href={BRAND.instagram.mainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Seguir no Instagram</span>
                    </Link>
                  </Button>
                  <Button
                    onClick={handleBookingClick}
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Agendar Horário</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
