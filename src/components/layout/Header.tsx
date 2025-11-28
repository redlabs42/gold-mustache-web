"use client";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BRAND } from "@/constants/brand";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Calendar, Instagram, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolledPastThreshold } = useScrollPosition(300);
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");

  const handleBookingClick = () => {
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 m-auto">
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
          <span className="font-playfair">Gold Mustache</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("home")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#servicos"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("services")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#equipe"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("team")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#instagram"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("instagram")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#eventos"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("events")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#contato"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("contact")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#parceiros"
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {t("sponsors")}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageSwitcher variant="desktop" />
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link
              href={BRAND.instagram.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span>{t("instagram")}</span>
            </Link>
          </Button>
          {!isScrolledPastThreshold && (
            <Button
              onClick={handleBookingClick}
              className="flex items-center space-x-2 transition-all duration-300"
            >
              <Calendar className="h-4 w-4" />
              <span>{tCommon("buttons.book")}</span>
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <div className="flex items-center justify-between">
            <span className="sr-only">{tCommon("aria.toggleTheme")}</span>
            <ThemeToggle />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{tCommon("aria.openMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-6 mt-6 pl-4 pr-4">
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

                {/* Language Switcher - Mobile */}
                <LanguageSwitcher variant="mobile" />

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("home")}
                  </Link>
                  <Link
                    href="#servicos"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("services")}
                  </Link>
                  <Link
                    href="#equipe"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("team")}
                  </Link>
                  <Link
                    href="#instagram"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("instagram")}
                  </Link>
                  <Link
                    href="#eventos"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("events")}
                  </Link>
                  <Link
                    href="#contato"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("contact")}
                  </Link>
                  <Link
                    href="#parceiros"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("sponsors")}
                  </Link>
                </nav>

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button variant="outline" asChild className="w-full">
                    <Link
                      href={BRAND.instagram.mainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>{tCommon("buttons.follow")}</span>
                    </Link>
                  </Button>
                  <Button
                    onClick={handleBookingClick}
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{tCommon("buttons.bookAppointment")}</span>
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
