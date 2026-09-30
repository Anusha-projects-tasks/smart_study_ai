import * as React from "react";
import Link from "next/link";
import { LucideIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ModulePlaceholderProps {
  moduleNumber: number;
  moduleName: string;
  phaseNumber: number;
  description: string;
  icon: LucideIcon;
}

export function ModulePlaceholder({
  moduleNumber,
  moduleName,
  phaseNumber,
  description,
  icon: Icon,
}: ModulePlaceholderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            Dashboard
          </Button>
        </Link>
      </div>

      <Card className="border-border">
        <CardContent className="p-8 md:p-12 text-center max-w-xl mx-auto flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
            <Icon className="h-7 w-7" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-[11px]">
              Module #{moduleNumber}
            </Badge>
            <Badge variant="secondary" className="text-[11px]">
              Phase {phaseNumber} Roadmap
            </Badge>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
            {moduleName}
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <div className="p-3 bg-muted/40 rounded-lg text-xs text-muted-foreground w-full">
            Database tables and RLS security policies for this module have been provisioned in the initial migration. Implementation activates in Phase {phaseNumber}.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
