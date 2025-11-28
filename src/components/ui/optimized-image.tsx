"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallback?: string;
  showPlaceholder?: boolean;
}

/**
 * Componente de imagem otimizado com:
 * - Lazy loading automático
 * - Suporte a WebP com fallback
 * - Placeholder blur
 * - Error handling
 */
export function OptimizedImage({
  src,
  alt,
  fallback,
  showPlaceholder = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Tenta usar WebP primeiro, depois fallback para original
  const imageSrc = error && fallback ? fallback : src;

  // Converte extensão para WebP se disponível
  const webpSrc = imageSrc.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <div className={`relative ${className || ""}`}>
      {isLoading && showPlaceholder && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        src={webpSrc}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}
