import { FileSpreadsheet } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function MockTestsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={24}
      moduleName="Timed Mock Tests"
      phaseNumber={6}
      description="Full-length timed exam simulations matching real exam formats with negative marking and percentile projections."
      icon={FileSpreadsheet}
    />
  );
}
