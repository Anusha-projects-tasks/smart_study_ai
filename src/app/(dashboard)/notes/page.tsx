import { FileText } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function NotesPage() {
  return (
    <ModulePlaceholder
      moduleNumber={16}
      moduleName="Notes Management & LaTeX Preview"
      phaseNumber={5}
      description="Dual-pane markdown editor with KaTeX math formula rendering, code highlighting, and inline AI assistance."
      icon={FileText}
    />
  );
}
