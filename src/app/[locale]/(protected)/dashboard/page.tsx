"use client";

import { Button } from "@/components/ui/button";
import { useSignOut, useUser } from "@/hooks/useAuth";

export default function DashboardPage() {
  const { data: user, isLoading } = useUser();
  const { mutate: signOut, isPending } = useSignOut();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button
          variant="outline"
          onClick={() => signOut()}
          disabled={isPending}
        >
          {isPending ? "Saindo..." : "Sair"}
        </Button>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold">Bem-vindo!</h2>
        <p className="text-muted-foreground">
          Você está logado como: <strong>{user?.email}</strong>
        </p>
      </div>
    </div>
  );
}
