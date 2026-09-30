import { Calendar } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function CalendarPage() {
  return (
    <ModulePlaceholder
      moduleNumber={14}
      moduleName="Interactive Academic Calendar"
      phaseNumber={4}
      description="Month, week, and day calendar views with drag-and-drop study sessions, assignment due dates, and exam markers with iCal export."
      icon={Calendar}
    />
  );
}
