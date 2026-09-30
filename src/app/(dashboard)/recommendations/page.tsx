import { Lightbulb } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function RecommendationsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={33}
      moduleName="AI Academic Recommendations"
      phaseNumber={7}
      description="'Next Best Action' guidance feed surfacing weak topics requiring immediate attention and revision reminders."
      icon={Lightbulb}
    />
  );
}
