import { BookOpen } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function SubjectsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={9}
      moduleName="Subjects & Syllabus Management"
      phaseNumber={2}
      description="Hierarchical syllabus tree (Subject -> Units -> Topics), syllabus text/PDF extraction via AI, and topic mastery sliders."
      icon={BookOpen}
    />
  );
}
