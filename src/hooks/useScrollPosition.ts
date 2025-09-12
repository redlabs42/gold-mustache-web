"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(threshold: number = 300) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolledPastThreshold(currentScrollY > threshold);
    };

    // Adiciona o event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Verifica posição inicial
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return {
    scrollY,
    isScrolledPastThreshold,
  };
}
