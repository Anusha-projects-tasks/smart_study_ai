import { Sparkles } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function LearnPage() {
  return (
    <ModulePlaceholder
      moduleNumber={19}
      moduleName="AI Multi-Depth Topic Explainer"
      phaseNumber={3}
      description="Interactive progressive elaboration from 'Explain Like I'm 5' to Undergraduate depth with real-world analogies and Socratic comprehension checks."
      icon={Sparkles}
    />
  );
}
