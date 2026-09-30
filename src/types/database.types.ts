export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "student" | "admin";
export type LearningStyle = "visual" | "reading_writing" | "active_recall" | "balanced";
export type TopicStatus = "not_started" | "in_progress" | "needs_review" | "mastered";
export type TopicDifficulty = "easy" | "medium" | "hard";
export type PlanItemType = "learn" | "practice" | "review" | "mock_test";
export type PlanItemStatus = "pending" | "completed" | "skipped" | "rescheduled";
export type SessionMode = "pomodoro" | "stopwatch";
export type ReviewState = "learning" | "review" | "relearning";
export type QuestionType = "mcq" | "multi_select" | "short_answer" | "numerical";
export type QuizType = "topic_quiz" | "daily_quiz" | "mock_test";
export type ErrorCategory = "concept_gap" | "careless" | "calculation" | "time_pressure" | "misread";
export type AssignmentPriority = "low" | "medium" | "high" | "urgent";
export type AssignmentStatus = "pending" | "in_progress" | "completed";
export type RecommendationType = "weak_topic_drill" | "spaced_revision_due" | "schedule_adjustment" | "exam_readiness";

export interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface StudentProfile {
  user_id: string;
  grade_level: string;
  institution: string | null;
  stream_field: string | null;
  target_exam: string | null;
  target_score: string | null;
  available_hours_weekly: number;
  preferred_session_minutes: number;
  learning_style: LearningStyle;
  streak_count: number;
  longest_streak: number;
  last_study_date: string | null;
  total_xp: number;
  current_level: number;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface LearningGoal {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  target_date: string;
  target_metric: string | null;
  current_progress: number;
  status: "active" | "completed" | "archived";
  created_at: string;
  updated_at: string;
}

export interface Subject {
  id: string;
  user_id: string;
  name: string;
  code: string | null;
  color_hex: string;
  icon_name: string;
  target_mastery: number;
  credit_hours: number;
  created_at: string;
  updated_at: string;
}

export interface SyllabusUnit {
  id: string;
  subject_id: string;
  user_id: string;
  unit_number: number;
  title: string;
  description: string | null;
  weightage_percent: number;
  created_at: string;
}

export interface Topic {
  id: string;
  unit_id: string;
  subject_id: string;
  user_id: string;
  title: string;
  description: string | null;
  order_index: number;
  difficulty: TopicDifficulty;
  estimated_minutes: number;
  mastery_score: number;
  status: TopicStatus;
  last_studied_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface StudyPlan {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  target_hours_per_week: number;
  ai_optimization_notes: string | null;
  is_active: boolean;
  created_at: string;
}

export interface StudyPlanItem {
  id: string;
  plan_id: string;
  user_id: string;
  topic_id: string | null;
  subject_id: string;
  scheduled_date: string;
  start_time: string | null;
  duration_minutes: number;
  item_type: PlanItemType;
  status: PlanItemStatus;
  completed_at: string | null;
  created_at: string;
}

export interface StudySession {
  id: string;
  user_id: string;
  topic_id: string | null;
  subject_id: string;
  plan_item_id: string | null;
  session_mode: SessionMode;
  duration_seconds: number;
  xp_earned: number;
  reflection_notes: string | null;
  created_at: string;
}

export interface Note {
  id: string;
  user_id: string;
  subject_id: string | null;
  topic_id: string | null;
  title: string;
  content_markdown: string;
  is_pinned: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface Document {
  id: string;
  user_id: string;
  subject_id: string | null;
  topic_id: string | null;
  title: string;
  file_url: string;
  file_size_bytes: number;
  mime_type: string;
  extracted_text: string | null;
  ai_summary: string | null;
  created_at: string;
}

export interface FlashcardDeck {
  id: string;
  user_id: string;
  subject_id: string | null;
  topic_id: string | null;
  title: string;
  description: string | null;
  card_count: number;
  created_at: string;
}

export interface Flashcard {
  id: string;
  deck_id: string;
  user_id: string;
  topic_id: string | null;
  front_text: string;
  back_text: string;
  hint: string | null;
  difficulty_rating: number;
  created_at: string;
}

export interface SpacedRepetitionItem {
  id: string;
  card_id: string;
  user_id: string;
  repetition_number: number;
  ease_factor: number;
  interval_days: number;
  due_date: string;
  last_reviewed_at: string | null;
  review_state: ReviewState;
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  distractorExplanation: string;
}

export interface QuestionBankItem {
  id: string;
  user_id: string;
  subject_id: string;
  topic_id: string | null;
  question_text: string;
  question_type: QuestionType;
  options: QuestionOption[];
  correct_answer: string;
  detailed_explanation: string;
  difficulty: TopicDifficulty;
  created_at: string;
}

export interface Quiz {
  id: string;
  user_id: string;
  subject_id: string;
  topic_id: string | null;
  title: string;
  quiz_type: QuizType;
  time_limit_minutes: number | null;
  total_marks: number;
  negative_marking_factor: number;
  created_at: string;
}

export interface QuizAttempt {
  id: string;
  quiz_id: string;
  user_id: string;
  score_obtained: number;
  percentage: number;
  time_taken_seconds: number;
  completed_at: string;
}

export interface MistakeEntry {
  id: string;
  user_id: string;
  question_id: string;
  topic_id: string;
  subject_id: string;
  error_category: ErrorCategory;
  student_notes: string | null;
  is_resolved: boolean;
  resolved_at: string | null;
  created_at: string;
}

export interface NotificationItem {
  id: string;
  user_id: string;
  title: string;
  message: string;
  category: "study_reminder" | "spaced_review" | "exam_alert" | "achievement";
  link_url: string | null;
  is_read: boolean;
  created_at: string;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  icon_name: string;
  xp_reward: number;
}
