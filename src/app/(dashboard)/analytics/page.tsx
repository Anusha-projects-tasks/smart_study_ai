import { BarChart3 } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function AnalyticsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={31}
      moduleName="Academic & Study-Time Analytics"
      phaseNumber={7}
      description="Subject mastery radars, daily/weekly study time heatmaps, and quiz score progression charts using Recharts."
      icon={BarChart3}
    />
  );
}
