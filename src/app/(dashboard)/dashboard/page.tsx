"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Clock,
  BookOpen,
  Sparkles,
  Layers,
  AlertTriangle,
  ArrowRight,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { createClient } from "@/lib/supabase/client";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = React.useState<string>("Student");
  const [onboardingCompleted, setOnboardingCompleted] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadStudentData() {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          setUserName(
            user.user_metadata?.full_name ||
              user.email?.split("@")[0] ||
              "Student"
          );

          const { data: profile } = await supabase
            .from("student_profiles")
            .select("onboarding_completed")
            .eq("user_id", user.id)
            .single();

          if (profile) {
            setOnboardingCompleted(profile.onboarding_completed);
          }
        }
      } catch (err) {
        console.error("Failed to load student profile:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadStudentData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Top Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Welcome back, {userName}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Phase 1 Foundation active. Your adaptive learning environment is ready for curriculum setup.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/timer">
            <Button size="sm" className="gap-2">
              <Clock className="h-4 w-4" />
              Focus Timer
            </Button>
          </Link>
          <Link href="/planner">
            <Button size="sm" variant="outline" className="gap-2">
              <CalendarDays className="h-4 w-4" />
              View Planner
            </Button>
          </Link>
        </div>
      </div>

      {/* Onboarding Alert Banner (if onboarding pending) */}
      {!onboardingCompleted && !isLoading && (
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">
                  Finish Student Onboarding
                </h4>
                <p className="text-xs text-muted-foreground">
                  Configure your weekly hours, target exam, and preferred subjects to calibrate your adaptive AI study engine.
                </p>
              </div>
            </div>
            <Link href="/onboarding" className="shrink-0">
              <Button size="sm" className="gap-1.5 w-full sm:w-auto">
                Complete Setup
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Overview Stat Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Current Streak
            </CardTitle>
            <Flame className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 Days</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Complete your first focus session today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Study Time Logged
            </CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.0 hrs</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Target: 15.0 hrs / week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Active Subjects
            </CardTitle>
            <BookOpen className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 Enrolled</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Add subjects in Phase 2
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Mastery Progress
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Overall syllabus coverage
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Section: Daily Study Plan Foundation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Today&apos;s Study Tasks
              </h2>
              <p className="text-xs text-muted-foreground">
                Dynamic daily tasks prioritized by exam countdowns and forgetting curves.
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              Today
            </Badge>
          </div>

          <EmptyState
            icon={CalendarDays}
            title="No study tasks scheduled yet"
            description="Your daily adaptive tasks will be automatically generated once subjects and syllabus topics are configured."
            actionLabel="Configure Subjects"
            onAction={() => {
              router.push("/subjects");
            }}
          />
        </div>

        {/* Quick Launchpad to Core Modules */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Pedagogical Quick Actions
          </h2>
          <div className="space-y-3">
            <Link href="/learn" className="block">
              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">AI Topic Explainer</p>
                      <p className="text-[11px] text-muted-foreground">ELIF5 to undergraduate depth</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/flashcards" className="block">
              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Spaced Repetition</p>
                      <p className="text-[11px] text-muted-foreground">SuperMemo SM-2 review queue</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/mistakes" className="block">
              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Mistake Tracker</p>
                      <p className="text-[11px] text-muted-foreground">Diagnose error root-causes</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
