import Link from "next/link";
import { Brain } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-muted/20">
      <div className="mb-8 flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-foreground hover:opacity-90 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Brain className="h-6 w-6" />
          </div>
          <span>AI Study Assistant</span>
        </Link>
      </div>
      <div className="w-full max-w-md">{children}</div>
      <p className="mt-8 text-xs text-center text-muted-foreground">
        Secure academic platform powered by Supabase & Next.js
      </p>
    </div>
  );
}
