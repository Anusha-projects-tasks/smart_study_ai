"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  Bell,
  Search,
  Moon,
  Sun,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export function AppHeader({ onOpenMobileMenu, onOpenSearch }: AppHeaderProps) {
  const pathname = usePathname();
  const [isDark, setIsDark] = React.useState(false);
  const [hasNotifications] = React.useState(true);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    });
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const getPageTitle = (path: string): string => {
    if (path.startsWith("/dashboard")) return "Student Dashboard";
    if (path.startsWith("/planner")) return "AI Study Planner";
    if (path.startsWith("/calendar")) return "Academic Calendar";
    if (path.startsWith("/timer")) return "Focus Timer & Pomodoro";
    if (path.startsWith("/subjects")) return "Subjects & Syllabus";
    if (path.startsWith("/notes")) return "Study Notes";
    if (path.startsWith("/documents")) return "Documents & PDFs";
    if (path.startsWith("/learn")) return "AI Topic Explainer";
    if (path.startsWith("/flashcards")) return "Spaced Repetition Flashcards";
    if (path.startsWith("/practice")) return "Practice Questions & MCQs";
    if (path.startsWith("/mock-tests")) return "Timed Mock Tests";
    if (path.startsWith("/revision")) return "Revision Queue";
    if (path.startsWith("/mistakes")) return "Mistake Diagnostic Tracker";
    if (path.startsWith("/assignments")) return "Assignments";
    if (path.startsWith("/exams")) return "Exams & Deadlines";
    if (path.startsWith("/analytics")) return "Performance Analytics";
    if (path.startsWith("/recommendations")) return "AI Recommendations";
    if (path.startsWith("/resources")) return "Study Resources";
    if (path.startsWith("/settings")) return "Settings";
    if (path.startsWith("/admin")) return "Admin Management";
    return "AI Study Assistant";
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-border bg-background/80 backdrop-blur flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenMobileMenu}
          className="md:hidden h-9 w-9 text-muted-foreground"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-base md:text-lg font-semibold text-foreground tracking-tight">
          {getPageTitle(pathname)}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Global Search Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenSearch}
          className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground h-9 px-3 bg-muted/30 hover:bg-muted"
        >
          <Search className="h-3.5 w-3.5" />
          <span>Quick search...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        </Button>

        {/* Mobile Search Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSearch}
          className="sm:hidden h-9 w-9 text-muted-foreground"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>

        {/* Study Streak Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
          <Flame className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          <span>0 Days</span>
        </div>

        {/* Notification Bell */}
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 text-muted-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          {hasNotifications && (
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
          )}
        </Button>

        {/* Dark / Light Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 text-muted-foreground"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </header>
  );
}
