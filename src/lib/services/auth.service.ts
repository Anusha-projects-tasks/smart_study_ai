import { createClient } from "@/lib/supabase/client";

export interface AuthErrorResponse {
  message: string;
}

export const authService = {
  async getSession() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },

  async getUser() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error) return null;
    return data.user;
  },

  async signInWithEmail(email: string, password: string) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async signUpWithEmail(email: string, password: string, fullName: string) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    if (error) throw error;
    return data;
  },

  async signInWithOAuth(provider: "google" | "github") {
    const supabase = createClient();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/api/auth/callback`,
      },
    });
    if (error) throw error;
    return data;
  },

  async sendPasswordResetEmail(email: string) {
    const supabase = createClient();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/reset-password`,
    });
    if (error) throw error;
    return data;
  },

  async updatePassword(newPassword: string) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
};
