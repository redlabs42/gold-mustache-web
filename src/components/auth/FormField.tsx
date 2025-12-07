"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export function FormField({
  label,
  error,
  className,
  id,
  ...props
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        className={cn(error && "border-destructive", className)}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
