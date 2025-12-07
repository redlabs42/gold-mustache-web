"use client";

import { Button } from "@/components/ui/button";
import { useSignIn } from "@/hooks/useAuth";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthCard } from "./AuthCard";
import { FormField } from "./FormField";
import { GoogleButton } from "./GoogleButton";

interface LoginFormProps {
  locale: string;
}

export function LoginForm({ locale }: LoginFormProps) {
  const { mutate: signIn, isPending } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    signIn(data);
  };

  return (
    <AuthCard title="Entrar" description="Acesse sua conta">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="seu@email.com"
          error={errors.email}
          {...register("email")}
        />

        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="••••••"
          error={errors.password}
          {...register("password")}
        />

        <div className="flex justify-end">
          <Link
            href={`/${locale}/reset-password`}
            className="text-sm text-primary hover:underline"
          >
            Esqueceu a senha?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">ou</span>
        </div>
      </div>

      <GoogleButton />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Não tem conta?{" "}
        <Link
          href={`/${locale}/signup`}
          className="text-primary hover:underline"
        >
          Criar conta
        </Link>
      </p>
    </AuthCard>
  );
}
