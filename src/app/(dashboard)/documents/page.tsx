import { Bookmark } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function DocumentsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={17}
      moduleName="PDF & Document Upload"
      phaseNumber={5}
      description="Drag-and-drop document upload to private Supabase Storage buckets, automatic text extraction, and AI summarization."
      icon={Bookmark}
    />
  );
}
