import { Layers } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export default function FlashcardsPage() {
  return (
    <ModulePlaceholder
      moduleNumber={20}
      moduleName="Spaced Repetition Flashcards"
      phaseNumber={6}
      description="Active recall card flip interface governed by the SuperMemo SM-2 spaced repetition algorithm for optimal memory retention."
      icon={Layers}
    />
  );
}
