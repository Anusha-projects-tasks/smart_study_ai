import { CalendarDays } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function PlannerPage() {
  return (
    <ModulePlaceholder
      moduleNumber={12}
      moduleName="Personalized AI Study Planner"
      phaseNumber={4}
      description="The constraint satisfaction algorithm and Gemini scheduler that dynamically constructs daily study loads balancing exam deadlines, topic weightage, and available hours."
      icon={CalendarDays}
    />
  );
}
