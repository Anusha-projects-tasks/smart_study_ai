import { AlertTriangle } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function MistakesPage() {
  return (
    <ModulePlaceholder
      moduleNumber={29}
      moduleName="Mistake Diagnostic Tracker"
      phaseNumber={6}
      description="Error notebook categorizing incorrect responses by concept gaps, careless slips, and calculation errors with one-click re-testing."
      icon={AlertTriangle}
    />
  );
}
