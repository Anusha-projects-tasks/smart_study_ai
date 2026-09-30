import { HelpCircle } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function PracticePage() {
  return (
    <ModulePlaceholder
      moduleNumber={21}
      moduleName="Practice Questions & MCQs"
      phaseNumber={6}
      description="Interactive practice generator with distractor analysis explaining exactly why incorrect answer choices are cognitive traps."
      icon={HelpCircle}
    />
  );
}
