"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Clock,
  BookOpen,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Form State
  const [gradeLevel, setGradeLevel] = React.useState("Grade 12 / High School Senior");
  const [targetExam, setTargetExam] = React.useState("");
  const [streamField, setStreamField] = React.useState("STEM / Natural Sciences");
  const [weeklyHours, setWeeklyHours] = React.useState(15);
  const [pomodoroMinutes, setPomodoroMinutes] = React.useState(25);
  const [learningStyle, setLearningStyle] = React.useState<"visual" | "reading_writing" | "active_recall" | "balanced">("active_recall");
  const [primarySubjects, setPrimarySubjects] = React.useState<string[]>(["Mathematics", "Physics", "Chemistry"]);
  const [newSubjectInput, setNewSubjectInput] = React.useState("");

  const addSubject = () => {
    if (newSubjectInput.trim() && !primarySubjects.includes(newSubjectInput.trim())) {
      setPrimarySubjects([...primarySubjects, newSubjectInput.trim()]);
      setNewSubjectInput("");
    }
  };

  const removeSubject = (subjectToRemove: string) => {
    setPrimarySubjects(primarySubjects.filter((s) => s !== subjectToRemove));
  };

  const handleFinishOnboarding = async () => {
    try {
      setIsSubmitting(true);
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Update student profile in Supabase
        await supabase
          .from("student_profiles")
          .update({
            grade_level: gradeLevel,
            target_exam: targetExam || null,
            stream_field: streamField || null,
            available_hours_weekly: weeklyHours,
            preferred_session_minutes: pomodoroMinutes,
            learning_style: learningStyle,
            onboarding_completed: true,
          })
          .eq("user_id", user.id);

        // Seed initial subjects chosen by the student
        for (const subjectName of primarySubjects) {
          await supabase.from("subjects").insert({
            user_id: user.id,
            name: subjectName,
            color_hex: "#2563eb",
            icon_name: "BookOpen",
            target_mastery: 85,
          });
        }
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Failed to complete onboarding:", error);
      // Even if network fails during dev, route to dashboard
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl border-border">
      {/* Step Indicator Progress Bar */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-medium mb-2">
          <span>Step {currentStep} of 4</span>
          <span>{Math.round((currentStep / 4) * 100)}% Completed</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {currentStep === 1 && (
        <>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-2">
              <GraduationCap className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Academic Background & Goals</CardTitle>
            <CardDescription>
              Help your AI assistant calibrate explanations and plan pacing to your academic level.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gradeLevel">Current Grade / Academic Level</Label>
              <Input
                id="gradeLevel"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                placeholder="e.g., Grade 11, Undergrad Year 2, Medical Student"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetExam">Target Exam / Goal (Optional)</Label>
              <Input
                id="targetExam"
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                placeholder="e.g., SAT, MCAT, AP Physics, University Finals"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="streamField">Field of Study / Academic Stream</Label>
              <Input
                id="streamField"
                value={streamField}
                onChange={(e) => setStreamField(e.target.value)}
                placeholder="e.g., Computer Science, Pre-Med, General STEM"
              />
            </div>
          </CardContent>
        </>
      )}

      {currentStep === 2 && (
        <>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
              <Clock className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Study Capacity & Rhythm</CardTitle>
            <CardDescription>
              Configure your weekly capacity so the AI planner never over-allocates your schedule.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label htmlFor="weeklyHours">Available Study Hours per Week</Label>
                <span className="font-semibold text-primary">{weeklyHours} hrs/week</span>
              </div>
              <input
                id="weeklyHours"
                type="range"
                min="5"
                max="50"
                step="1"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                Roughly {(weeklyHours / 7).toFixed(1)} hours of focused study per day.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Preferred Focus Interval</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { minutes: 25, label: "25 min (Standard Pomodoro)" },
                  { minutes: 45, label: "45 min (Deep Work Block)" },
                  { minutes: 60, label: "60 min (Extended Session)" },
                ].map((item) => (
                  <button
                    key={item.minutes}
                    type="button"
                    onClick={() => setPomodoroMinutes(item.minutes)}
                    className={`p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                      pomodoroMinutes === item.minutes
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted text-foreground"
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{item.minutes}m</div>
                    <span className="text-muted-foreground">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </>
      )}

      {currentStep === 3 && (
        <>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-2">
              <BookOpen className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Enrolled Subjects</CardTitle>
            <CardDescription>
              Add the subjects you are actively studying this term.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="e.g., Linear Algebra, Organic Chemistry"
                value={newSubjectInput}
                onChange={(e) => setNewSubjectInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSubject();
                  }
                }}
              />
              <Button type="button" onClick={addSubject} variant="secondary">
                Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {primarySubjects.map((subject) => (
                <Badge
                  key={subject}
                  variant="secondary"
                  className="px-3 py-1.5 text-xs flex items-center gap-1.5 bg-card border border-border"
                >
                  <span>{subject}</span>
                  <button
                    type="button"
                    onClick={() => removeSubject(subject)}
                    className="text-muted-foreground hover:text-destructive ml-1"
                    aria-label={`Remove ${subject}`}
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </>
      )}

      {currentStep === 4 && (
        <>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Preferred Learning Style</CardTitle>
            <CardDescription>
              Select how you absorb complex scientific and academic concepts best.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              {
                id: "active_recall",
                title: "Active Recall & Spaced Repetition",
                desc: "Emphasis on prompt testing, flashcards, distractor MCQs, and continuous retrieval practice.",
              },
              {
                id: "visual",
                title: "Visual & Analogy-Driven",
                desc: "Emphasis on conceptual diagrams, visual analogies, and intuitive mental models.",
              },
              {
                id: "reading_writing",
                title: "In-depth Textual & Derivations",
                desc: "Emphasis on formal mathematical proofs, comprehensive notes, and structured summaries.",
              },
              {
                id: "balanced",
                title: "Balanced Multimodal",
                desc: "Equal distribution of explanation depth, interactive checks, and flashcard drills.",
              },
            ].map((style) => (
              <button
                key={style.id}
                type="button"
                onClick={() => setLearningStyle(style.id as typeof learningStyle)}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  learningStyle === style.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm text-foreground">
                    {style.title}
                  </h4>
                  {learningStyle === style.id && (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{style.desc}</p>
              </button>
            ))}
          </CardContent>
        </>
      )}

      <CardFooter className="flex justify-between border-t border-border pt-4">
        {currentStep > 1 ? (
          <Button
            type="button"
            variant="ghost"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={isSubmitting}
            className="gap-2 text-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Button>
        ) : (
          <div />
        )}

        {currentStep < 4 ? (
          <Button
            type="button"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="gap-2 text-xs"
          >
            Continue
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleFinishOnboarding}
            disabled={isSubmitting}
            className="gap-2 text-xs"
          >
            {isSubmitting ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5" />
            )}
            Finish & Launch Workspace
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
