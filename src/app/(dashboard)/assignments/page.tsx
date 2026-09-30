import { CheckSquare } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function AssignmentsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={25}
      moduleName="Assignment Management"
      phaseNumber={4}
      description="Track deadlines, priority flags, assignment rubrics, and submission files across all enrolled subjects."
      icon={CheckSquare}
    />
  );
}
