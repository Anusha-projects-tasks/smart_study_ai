import Link from "next/link";
import { Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2 text-xs">
              <ArrowLeft className="h-3.5 w-3.5" />
              Student Dashboard
            </Button>
          </Link>
          <div className="h-4 w-[1px] bg-border" />
          <div className="flex items-center gap-2 font-bold text-sm text-foreground">
            <Brain className="h-4 w-4 text-primary" />
            <span>Admin Console</span>
          </div>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
          Platform Administration
        </span>
      </header>
      <main className="flex-1 p-6 max-w-5xl mx-auto w-full">{children}</main>
    </div>
  );
}
