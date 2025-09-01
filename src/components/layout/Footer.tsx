"use client";

import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";
import { Calendar, Clock, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBookingClick = () => {
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center">
                <Image
                  src="/logo-new-02.png"
                  alt="Gold Mustache Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-playfair">
                  Gold Mustache
                </h3>
                <p className="text-sm text-muted-foreground">{BRAND.tagline}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Barbearia tradicional em Itapema, oferecendo serviços de qualidade
              com mais de 10 anos de experiência em cortes masculinos clássicos
              e modernos.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={BRAND.instagram.mainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border-primary/30 bg-background text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Barbearia</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={BRAND.instagram.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border-primary/30 bg-background text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Loja</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  {BRAND.contact.address}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  {BRAND.contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>{BRAND.hours.weekdays}</div>
                  <div>{BRAND.hours.saturday}</div>
                  <div>{BRAND.hours.sunday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Links Rápidos</h4>
            <div className="space-y-3 text-sm">
              <Link
                href="#servicos"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Nossos Serviços
              </Link>
              <Link
                href="#trabalhos"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Galeria de Trabalhos
              </Link>
              <Link
                href="#contatoLocalizacao"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Fale Conosco
              </Link>
              <Button
                variant="link"
                size="sm"
                onClick={handleBookingClick}
                className="h-auto p-0 text-primary hover:text-primary/80 text-sm font-normal"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Horário
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Gold Mustache Barbearia. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 md:mt-0">{BRAND.location}</p>
        </div>
      </div>
    </footer>
  );
}
