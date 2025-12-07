import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "sonner";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-background">{children}</div>
      <Toaster position="top-center" richColors />
    </QueryProvider>
  );
}
