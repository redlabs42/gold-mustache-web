import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        {children}
      </div>
      <Toaster position="top-center" richColors />
    </QueryProvider>
  );
}
