import { RotateCcw } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function RevisionPage() {
  return (
    <ModulePlaceholder
      moduleNumber={27}
      moduleName="Spaced Revision System"
      phaseNumber={6}
      description="Dashboard monitoring your retention decay curve, with prioritized queues for cards and topics scheduled for review today."
      icon={RotateCcw}
    />
  );
}
