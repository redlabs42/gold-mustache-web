"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BRAND } from "@/constants/brand";
import { ExternalLink, Heart, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

// Mock data for Instagram posts - será substituído pela integração real
const mockInstagramPosts = [
  {
    id: "1",
    image: "/post-1.jpg",
    caption:
      "Agenda aberta para transformar seu visual na Barbearia Gold Mustache! 💈✂️ #goldmustache #barbearia",
    // likes: 45,
    // comments: 8,
    url: "https://www.instagram.com/p/C4d6isbPcrv/",
  },
  {
    id: "2",
    image: "/post-2.jpg",
    caption:
      "✂️ Agende já o seu horário na Barbearia Gold Mustache! 💈 #barba #estilo",
    // likes: 32,
    // comments: 5,
    url: "https://www.instagram.com/p/C3ntXR2P-OR/",
  },
  {
    id: "3",
    image: "/post-3.jpg",
    caption:
      "Experimente a excelência no cuidado com a Barbearia Gold Mustache. 🪑",
    // likes: 28,
    // comments: 3,
    url: "https://www.instagram.com/p/C29pPW7ORnf/",
  },
  {
    id: "4",
    image: "/post-4.jpg",
    caption:
      "✨✂️ O tratamento que você merece está aqui na Gold Mustache. Agende seu horário e descubra o cuidado premium que fará você se sentir no topo da elegância. Sua barba, seu estilo, nossa expertise. 💈👑",
    // likes: 38,
    // comments: 7,
    url: "https://www.instagram.com/p/C2A16GsP5rj/",
  },
];

export function InstagramSection() {
  return (
    <section className="py-20 bg-background" id="trabalhos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Instagram className="h-4 w-4 mr-2" />
            Nossos Trabalhos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Acompanhe no <span className="text-primary">Instagram</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Veja os nossos trabalhos mais recentes e acompanhe o dia a dia da
            barbearia. Inspiração e qualidade em cada post.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <a
                href={BRAND.instagram.mainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Seguir @goldmustachebarbearia</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={BRAND.instagram.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Produtos @_goldlab</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockInstagramPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0 relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt="Instagram post"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-5 w-5 fill-white" />
                          {/* <span className="font-semibold">{post?.likes}</span> */}
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-5 w-5" />
                          <span className="font-semibold">
                            {/* {post?.comments} */}
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="mt-3"
                        onClick={() => window.open(post.url, "_blank")}
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        Ver no Instagram
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Quer ver mais trabalhos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Siga nossos perfis no Instagram para acompanhar todos os
              trabalhos, novidades e promoções especiais da Gold Mustache.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <a
                  href={BRAND.instagram.mainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @goldmustachebarbearia
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={BRAND.instagram.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @_goldlab
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
