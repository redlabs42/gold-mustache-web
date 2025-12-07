"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function AuthCard({
  children,
  title,
  description,
  className,
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md rounded-xl border bg-card p-8 shadow-lg",
        className,
      )}
    >
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
