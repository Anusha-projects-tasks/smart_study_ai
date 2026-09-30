import { Calendar } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function ExamsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={26}
      moduleName="Exam Schedule & Countdowns"
      phaseNumber={4}
      description="Live countdown clocks, syllabus coverage gauges, and exam weightage trackers to guide prioritization."
      icon={Calendar}
    />
  );
}
