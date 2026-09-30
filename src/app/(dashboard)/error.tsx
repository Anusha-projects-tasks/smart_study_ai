"use client";

import * as React from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log client error to console (or telemetry in future phases)
    console.error("Dashboard error caught by boundary:", error);
  }, [error]);

  return (
    <div className="h-[60vh] w-full flex flex-col items-center justify-center p-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
        <AlertCircle className="h-7 w-7" />
      </div>
      <h2 className="text-xl font-bold tracking-tight mb-2">
        Something went wrong
      </h2>
      <p className="text-sm text-muted-foreground max-w-md mb-6">
        {error.message || "An unexpected error occurred while loading this workspace view."}
      </p>
      <div className="flex items-center gap-3">
        <Button onClick={() => reset()} variant="default" size="sm" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
