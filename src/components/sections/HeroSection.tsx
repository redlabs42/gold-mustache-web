"use client";

import { Calendar, Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";

export function HeroSection() {
  const handleBookingClick = () => {
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-muted/10 to-muted/20" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              Itapema, SC
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Segunda a Sábado
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2 fill-primary text-primary" />
              +10 anos de experiência
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-playfair sr-only">
              <span className="text-primary font-playfair font-extrabold">
                Gold
              </span>{" "}
              <span className="text-foreground font-extrabold">Mustache</span>
            </h1>
            {/* <div className="flex justify-center"> */}
            <Image
              src="/logo-gold-mustache-removebg-preview.png"
              alt="Gold Mustache Logo"
              width={623}
              height={400}
              className="mx-auto rounded-full object-cover h-30"
            />
            {/* </div> */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium sr-only">
              {BRAND.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais de 10 anos oferecendo o melhor em cortes masculinos clássicos
              e modernos. Tradição, qualidade e estilo em cada atendimento na
              melhor barbearia de Itapema.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={handleBookingClick}
              className="text-lg px-8 py-6 h-auto min-w-[200px] font- font-bold"
            >
              <Calendar className="h-5 w-5 mr-3" />
              Agendar Horário
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-6 h-auto min-w-[200px]"
            >
              <a href="#servicos">Ver Serviços</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">
                Avaliação dos Clientes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
