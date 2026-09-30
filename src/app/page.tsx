import Link from "next/link";
import {
  Brain,
  Calendar,
  Sparkles,
  Target,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Clock,
  Layers,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Brain className="h-5 w-5" />
            </div>
            <span>AI Study Assistant</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Platform Features
            </a>
            <a href="#learning-loop" className="hover:text-foreground transition-colors">
              The Learning Loop
            </a>
            <a href="#methodology" className="hover:text-foreground transition-colors">
              Cognitive Science
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="gap-1.5">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <Badge variant="outline" className="mb-6 px-3.5 py-1 text-xs gap-1.5 rounded-full border-primary/30 bg-primary/5 text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Next-Gen Academic Engine • Integrated Pedagogical Lifecycle
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight md:leading-[1.15]">
              Master Any Syllabus with an{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Adaptive AI Study Engine
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Not another generic chatbot. A complete academic management platform that assesses your baseline, builds daily dynamic study plans, reinforces concepts with spaced recall, and systematically diagnoses your mistakes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full gap-2 text-base h-12 px-8 shadow-md shadow-primary/20">
                  Begin Free Assessment
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-12 px-8">
                  Sign In to Dashboard
                </Button>
              </Link>
            </div>

            {/* Quick Proof Metrics */}
            <div className="mt-14 pt-10 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">SM-2 Spaced</p>
                <p className="text-xs text-muted-foreground mt-1">Repetition Algorithm</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Dynamic</p>
                <p className="text-xs text-muted-foreground mt-1">Daily AI Scheduler</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Distractor AI</p>
                <p className="text-xs text-muted-foreground mt-1">Root Misconception Analysis</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Zero Leaks</p>
                <p className="text-xs text-muted-foreground mt-1">Row-Level Database Security</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Closed Learning Loop Section */}
        <section id="learning-loop" className="py-20 bg-muted/30 border-b border-border/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">
                Pedagogical Architecture
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">The 8-Stage Learning Lifecycle</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
                How AI Study Assistant actively guides students from uncertainty to verified mastery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  desc: "Evaluates current mastery, available study hours, and upcoming exam dates.",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "Adaptive Plan",
                  desc: "Generates prioritized daily tasks balancing new topics with scheduled reviews.",
                  icon: Calendar,
                },
                {
                  step: "03",
                  title: "Learn & Distill",
                  desc: "Multi-depth AI explanations (ELIF5 to undergraduate) and LaTeX notes.",
                  icon: BookOpen,
                },
                {
                  step: "04",
                  title: "Active Recall",
                  desc: "Algorithmic flashcard queues calculated with SuperMemo SM-2 intervals.",
                  icon: Layers,
                },
                {
                  step: "05",
                  title: "Practice & MCQs",
                  desc: "Questions with deep distractor feedback explaining exactly why traps are wrong.",
                  icon: CheckCircle2,
                },
                {
                  step: "06",
                  title: "Timed Evaluation",
                  desc: "Full-length mock tests and quizzes simulating actual exam conditions.",
                  icon: Clock,
                },
                {
                  step: "07",
                  title: "Error Diagnostics",
                  desc: "Categorizes mistakes by concept gap, careless error, or calculation slips.",
                  icon: RotateCcw,
                },
                {
                  step: "08",
                  title: "Plan Adaptation",
                  desc: "Automatically reschedules weak topics into tomorrow's priority queue.",
                  icon: TrendingUp,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-border bg-card p-5 relative shadow-sm hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-primary">
                      {item.step}
                    </span>
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">
                Engine Capabilities
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Everything You Need to Excel</h2>
              <p className="text-muted-foreground mt-2 max-w-lg mx-auto text-sm">
                40 integrated modules replacing disconnected note apps, timers, flashcard decks, and spreadsheets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Personalized Daily Planner</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Calculates your optimal daily revision load by weighting topic difficulty, exam countdowns, and your available weekly capacity.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                  <RotateCcw className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Spaced Repetition & Recall</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Automated SM-2 interval scheduling guarantees you review concepts right as you are about to forget them, maximizing long-term retention.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Distractor-Aware Practice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Practice questions that teach as you test. Each incorrect answer provides a breakdown of the specific cognitive trap behind it.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Focus Timer & Soundscapes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pomodoro and stopwatch modes with ambient audio integration that automatically logs verified deep work hours to your topic mastery records.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center mb-4">
                  <Brain className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mistake Diagnostic Tracker</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Automatically extracts every wrong quiz answer into an error notebook with one-click re-testing until mastery is mathematically proven.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Production Security</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strict PostgreSQL Row-Level Security, private document storage with signed URLs, and isolated serverless AI pipelines with zero token exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Upgrade Your Academic Performance?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Set up your profile, configure your target subjects, and start studying with systematic cognitive precision.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="gap-2 font-semibold h-12 px-8">
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background text-sm text-muted-foreground">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">AI Study Assistant</span>
            <span>— Structured Student Learning Platform</span>
          </div>
          <p>© {new Date().getFullYear()} AI Study Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
