"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BRAND } from "@/constants/brand";
import {
  Calendar,
  Clock,
  Instagram,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
} from "lucide-react";

export function ContactSection() {
  const handleBookingClick = () => {
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar um horário na Gold Mustache Barbearia.",
    );
    window.open(
      `https://wa.me/${BRAND.contact.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  const handleWhatsAppVitorClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar um horário na Gold Mustache Barbearia.",
    );
    window.open(
      `https://wa.me/${BRAND.contactVitor.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  const handleWhatsAppJoaoClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar um horário na Gold Mustache Barbearia.",
    );
    window.open(
      `https://wa.me/${BRAND.contactJoao.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  const handleWhatsAppDavidClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar um horário na Gold Mustache Barbearia.",
    );
    window.open(
      `https://wa.me/${BRAND.contactDavid.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  const handleDirectionsClick = () => {
    const encodedAddress = encodeURIComponent(BRAND.contact.address);
    window.open(
      `https://www.google.com/maps/search/${encodedAddress}`,
      "_blank",
    );
  };

  return (
    <section className="py-20 bg-muted/30" id="contatoLocalizacao">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contato & Localização
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Venha nos <span className="text-primary">Visitar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados no coração de Itapema, prontos para oferecer o
            melhor atendimento e cuidado com seu visual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Endereço</span>
                </CardTitle>
                <CardDescription>Nossa localização em Itapema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground font-medium">
                  {BRAND.contact.address}
                </p>
                <Button
                  onClick={handleDirectionsClick}
                  variant="outline"
                  className="w-full"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Como Chegar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
                <CardDescription>Quando estamos abertos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <span className="font-medium">10h às 20h</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="font-medium">10h às 20h</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="font-medium text-destructive">Fechado</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Contato Direto Ygor Luan (proprietário)</span>
                </CardTitle>
                <CardDescription>Fale conosco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Telefone</p>
                  <p className="font-medium">{BRAND.contact.phone}</p>
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full"
                  variant="outline"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Contato Direto Vitor Maronez (proprietário)</span>
                </CardTitle>
                <CardDescription>Fale conosco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Telefone</p>
                  <p className="font-medium">{BRAND.contactVitor.phone}</p>
                </div>
                <Button
                  onClick={handleWhatsAppVitorClick}
                  className="w-full"
                  variant="outline"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Barbeiro: João Vitor</span>
                  </CardTitle>
                  <CardDescription>Fale conosco</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Telefone</p>
                    <p className="font-medium">{BRAND.contactJoao.phone}</p>
                  </div>
                  <Button
                    onClick={handleWhatsAppJoaoClick}
                    className="w-full"
                    variant="outline"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Barbeiro: David Trindade</span>
                  </CardTitle>
                  <CardDescription>Fale conosco</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Telefone</p>
                    <p className="font-medium">{BRAND.contactDavid.phone}</p>
                  </div>
                  <Button
                    onClick={handleWhatsAppDavidClick}
                    className="w-full"
                    variant="outline"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mapa Placeholder e Ações */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Localização
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-xs">
                        Mapa interativo será carregado aqui com a localização
                        exata da barbearia
                      </p>
                    </div>
                    <Button onClick={handleDirectionsClick} size="sm">
                      <Navigation className="h-4 w-4 mr-2" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Actions */}
            <div className="flex w-full">
              <Button
                onClick={handleBookingClick}
                size="lg"
                className="h-auto py-4 w-full"
              >
                <Calendar className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Agendar</div>
                  <div className="text-xs opacity-90">Sistema Online</div>
                </div>
              </Button>

              {/* <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                size="lg"
                className="h-auto py-4"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">
                    WhatsApp Ygor (proprietário)
                  </div>
                  <div className="text-xs opacity-90">Contato Direto</div>
                </div>
              </Button> */}
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Siga-nos no Instagram</CardTitle>
                <CardDescription>
                  Acompanhe nossos trabalhos e novidades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={BRAND.instagram.mainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>@goldmustachebarbearia</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={BRAND.instagram.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>@_goldlab</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        {/* <div className="text-center">
          <Card className="max-w-lg mx-auto bg-secondary text-secondary-foreground">
            <CardContent className="py-6">
              <h3 className="font-semibold mb-2">Emergência ou Dúvidas?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Entre em contato conosco via WhatsApp para atendimento rápido
              </p>
              <Button onClick={handleWhatsAppClick} size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Falar Agora
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
