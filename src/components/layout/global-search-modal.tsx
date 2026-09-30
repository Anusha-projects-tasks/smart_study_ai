"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutDashboard,
  CalendarDays,
  Clock,
  BookOpen,
  FileText,
  Layers,
  HelpCircle,
  AlertTriangle,
  BarChart3,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const searchItems: SearchItem[] = [
  { id: "1", title: "Dashboard Overview", category: "Navigation", href: "/dashboard", icon: LayoutDashboard },
  { id: "2", title: "AI Study Planner", category: "Planning", href: "/planner", icon: CalendarDays },
  { id: "3", title: "Focus Timer (Pomodoro)", category: "Productivity", href: "/timer", icon: Clock },
  { id: "4", title: "Subjects & Syllabus", category: "Curriculum", href: "/subjects", icon: BookOpen },
  { id: "5", title: "Study Notes & Formulas", category: "Learning", href: "/notes", icon: FileText },
  { id: "6", title: "Flashcards (SM-2 Spaced Repetition)", category: "Recall", href: "/flashcards", icon: Layers },
  { id: "7", title: "Practice Questions & MCQs", category: "Testing", href: "/practice", icon: HelpCircle },
  { id: "8", title: "Mistake Diagnostic Tracker", category: "Diagnostics", href: "/mistakes", icon: AlertTriangle },
  { id: "9", title: "Performance Analytics", category: "Insights", href: "/analytics", icon: BarChart3 },
];

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      requestAnimationFrame(() => setQuery(""));
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-sm animate-in fade-in-0">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden z-10">
        <div className="flex items-center px-4 border-b border-border">
          <Search className="h-4 w-4 text-muted-foreground mr-2 shrink-0" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search subjects, notes, tools, or type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-muted-foreground hover:text-foreground"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-sm text-muted-foreground">
              No matching modules or resources found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.href)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm hover:bg-muted transition-colors text-foreground group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium text-xs md:text-sm">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider bg-muted px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-muted/30 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Navigate with mouse or keyboard</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
