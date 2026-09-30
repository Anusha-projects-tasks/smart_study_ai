"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Brain,
  LayoutDashboard,
  CalendarDays,
  Clock,
  BookOpen,
  FileText,
  Sparkles,
  Layers,
  HelpCircle,
  FileSpreadsheet,
  RotateCcw,
  AlertTriangle,
  BarChart3,
  Lightbulb,
  Bookmark,
  Calendar,
  Settings,
  LogOut,
  Flame,
  CheckSquare,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { authService } from "@/lib/services/auth.service";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Planning & Focus",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "AI Study Planner", href: "/planner", icon: CalendarDays },
      { title: "Calendar", href: "/calendar", icon: Calendar },
      { title: "Focus Timer", href: "/timer", icon: Clock },
    ],
  },
  {
    title: "Curriculum & Learning",
    items: [
      { title: "Subjects & Syllabus", href: "/subjects", icon: BookOpen },
      { title: "Study Notes", href: "/notes", icon: FileText },
      { title: "Documents & PDFs", href: "/documents", icon: Bookmark },
      { title: "AI Explainer", href: "/learn", icon: Sparkles },
    ],
  },
  {
    title: "Recall & Evaluation",
    items: [
      { title: "Flashcards (SM-2)", href: "/flashcards", icon: Layers },
      { title: "Practice & MCQs", href: "/practice", icon: HelpCircle },
      { title: "Mock Tests", href: "/mock-tests", icon: FileSpreadsheet },
      { title: "Spaced Revision", href: "/revision", icon: RotateCcw },
      { title: "Mistake Tracker", href: "/mistakes", icon: AlertTriangle },
    ],
  },
  {
    title: "Academic Operations",
    items: [
      { title: "Assignments", href: "/assignments", icon: CheckSquare },
      { title: "Exams", href: "/exams", icon: Calendar },
      { title: "Performance Analytics", href: "/analytics", icon: BarChart3 },
      { title: "AI Recommendations", href: "/recommendations", icon: Lightbulb },
      { title: "Resource Bank", href: "/resources", icon: Bookmark },
    ],
  },
  {
    title: "Account",
    items: [
      { title: "Settings", href: "/settings", icon: Settings },
      { title: "Admin Portal", href: "/admin/users", icon: ShieldCheck },
    ],
  },
];

export function AppSidebar({
  className,
  onCloseMobile,
}: {
  className?: string;
  onCloseMobile?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [userName, setUserName] = React.useState<string>("Student");
  const [userEmail, setUserEmail] = React.useState<string>("");

  React.useEffect(() => {
    authService.getUser().then((user) => {
      if (user) {
        setUserName(
          user.user_metadata?.full_name ||
            user.email?.split("@")[0] ||
            "Student"
        );
        setUserEmail(user.email || "");
      }
    });
  }, []);

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
    }
  };

  return (
    <aside
      className={cn(
        "flex flex-col h-full w-64 border-r border-border bg-card/60 backdrop-blur select-none",
        className
      )}
    >
      {/* Brand Header */}
      <div className="h-16 px-5 border-b border-border flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 font-bold text-base tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Brain className="h-4 w-4" />
          </div>
          <span>AI Study Assistant</span>
        </Link>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="px-3 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground mb-2">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMobile}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 truncate">{item.title}</span>
                    {item.badge && (
                      <span
                        className={cn(
                          "px-1.5 py-0.2 rounded text-[10px] font-semibold",
                          isActive
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* User Footer Profile & Sign Out */}
      <div className="p-3 border-t border-border bg-card/40">
        <div className="flex items-center gap-2 px-2 py-1.5 mb-2 rounded-lg bg-muted/50">
          <Avatar fallbackText={userName} className="h-8 w-8" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">
              {userName}
            </p>
            <p className="text-[10px] text-muted-foreground truncate">
              {userEmail}
            </p>
          </div>
          <div className="flex items-center gap-0.5 text-amber-500 font-semibold text-xs pr-1" title="Study Streak">
            <Flame className="h-3.5 w-3.5 fill-amber-500" />
            <span>0</span>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className="w-full justify-start gap-2 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-8"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
