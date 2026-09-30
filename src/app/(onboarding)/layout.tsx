import Link from "next/link";
import { Brain } from "lucide-react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-base tracking-tight text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Brain className="h-4 w-4" />
          </div>
          <span>AI Study Assistant</span>
        </Link>
        <span className="text-xs font-medium text-muted-foreground">
          Academic Onboarding Setup
        </span>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl">{children}</div>
      </main>
    </div>
  );
}
