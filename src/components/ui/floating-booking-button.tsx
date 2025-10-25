"use client";

import { trackBookingClick } from "@/components/analytics/GoogleAnalytics";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Calendar } from "lucide-react";

export function FloatingBookingButton() {
  const { isScrolledPastThreshold } = useScrollPosition(300);

  const handleBookingClick = () => {
    // Abre o sistema de agendamento Inbarber em uma nova aba
    window.open(BRAND.booking.inbarberUrl, "_blank", "noopener,noreferrer");

    // Analytics tracking
    trackBookingClick();
  };

  if (!isScrolledPastThreshold) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <Button
        onClick={handleBookingClick}
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold px-6 py-3 h-auto"
        aria-label="Agendar horário na barbearia"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Agendar
      </Button>
    </div>
  );
}
