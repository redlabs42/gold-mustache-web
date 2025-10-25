"use client";

import { useEffect, useState } from "react";
import { LoadingElevator } from "./loading-elevator";

export function LoadingElevatorWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Wait for initial content to be ready, then trigger opening animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    // Remove component from DOM after opening animation completes
    setShouldRender(false);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <LoadingElevator
      open={!isLoading}
      onAnimationComplete={handleAnimationComplete}
    />
  );
}
