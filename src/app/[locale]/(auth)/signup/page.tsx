import { SignupForm } from "@/components/auth/SignupForm";

interface SignupPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SignupPage({ params }: SignupPageProps) {
  const { locale } = await params;

  return <SignupForm locale={locale} />;
}
