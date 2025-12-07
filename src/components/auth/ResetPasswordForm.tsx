"use client";

import { Button } from "@/components/ui/button";
import { useResetPassword } from "@/hooks/useAuth";
import { resetSchema, type ResetInput } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthCard } from "./AuthCard";
import { FormField } from "./FormField";

interface ResetPasswordFormProps {
  locale: string;
}

export function ResetPasswordForm({ locale }: ResetPasswordFormProps) {
  const { mutate: resetPassword, isPending, isSuccess } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetInput>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = (data: ResetInput) => {
    resetPassword(data.email);
  };

  if (isSuccess) {
    return (
      <AuthCard
        title="Email enviado!"
        description="Verifique sua caixa de entrada para redefinir sua senha."
      >
        <Link href={`/${locale}/login`}>
          <Button className="w-full">Voltar para login</Button>
        </Link>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Recuperar senha"
      description="Digite seu email para receber o link de recuperação"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="seu@email.com"
          error={errors.email}
          {...register("email")}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar link"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Lembrou a senha?{" "}
        <Link
          href={`/${locale}/login`}
          className="text-primary hover:underline"
        >
          Entrar
        </Link>
      </p>
    </AuthCard>
  );
}
