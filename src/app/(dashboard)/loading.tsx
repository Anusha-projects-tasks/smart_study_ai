import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="h-[60vh] w-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm font-medium animate-pulse">Loading study workspace...</p>
    </div>
  );
}
