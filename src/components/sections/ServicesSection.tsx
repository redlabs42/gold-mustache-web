"use client";

import { Calendar, Clock, ShirtIcon as Razor, Scissors } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BRAND, SERVICES } from "@/constants/brand";

const serviceIcons = {
  "corte-tradicional": Scissors,
  "corte-barba": Scissors,
  "barba-completa": Razor,
  bigode: Razor,
  sobrancelha: Scissors,
};

export function ServicesSection() {
  const handleBookingClick = () => {
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tradição em <span className="text-primary">Cada Corte</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em cuidados
            masculinos, sempre com a qualidade e atenção aos detalhes que você
            merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service) => {
            const IconComponent =
              serviceIcons[service.id as keyof typeof serviceIcons];

            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={handleBookingClick}
                    className="w-full"
                    variant="outline"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar {service.name}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Featured Combo */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                Mais Popular
              </Badge>
              <CardTitle className="text-2xl md:text-3xl">
                Combo Completo
              </CardTitle>
              <CardDescription className="text-lg">
                Corte + Barba + Sobrancelha - O pacote completo para um visual
                impecável
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-lg text-muted-foreground line-through">
                  R$ 60,00
                </div>
                <div className="text-3xl font-bold text-primary">R$ 50,00</div>
                <Badge variant="destructive">Economize R$ 10</Badge>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-6">
                <Clock className="h-4 w-4" />
                <span>Aproximadamente 75 minutos</span>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleBookingClick} size="lg" className="flex-1">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Combo Completo
              </Button>
              <Button variant="outline" size="lg" asChild className="flex-1">
                <a href="/servicos">Ver Todos os Serviços</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
