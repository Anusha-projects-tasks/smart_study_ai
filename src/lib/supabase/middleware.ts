import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If using placeholder credentials during initial development, allow bypass so pages can be inspected
  const isPlaceholderConfig =
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl.includes("placeholder-project") ||
    supabaseAnonKey.includes("placeholder");

  if (isPlaceholderConfig) {
    return supabaseResponse;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const url = request.nextUrl.clone();
  const path = url.pathname;

  const isAuthRoute =
    path.startsWith("/login") ||
    path.startsWith("/register") ||
    path.startsWith("/forgot-password") ||
    path.startsWith("/reset-password");

  const isProtectedRoute =
    path.startsWith("/dashboard") ||
    path.startsWith("/planner") ||
    path.startsWith("/calendar") ||
    path.startsWith("/timer") ||
    path.startsWith("/subjects") ||
    path.startsWith("/notes") ||
    path.startsWith("/documents") ||
    path.startsWith("/learn") ||
    path.startsWith("/flashcards") ||
    path.startsWith("/practice") ||
    path.startsWith("/mock-tests") ||
    path.startsWith("/assignments") ||
    path.startsWith("/exams") ||
    path.startsWith("/revision") ||
    path.startsWith("/mistakes") ||
    path.startsWith("/analytics") ||
    path.startsWith("/recommendations") ||
    path.startsWith("/resources") ||
    path.startsWith("/profile") ||
    path.startsWith("/settings") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/admin");

  // If unauthenticated and accessing a protected route, redirect to login
  if (!user && isProtectedRoute) {
    url.pathname = "/login";
    url.searchParams.set("redirect", path);
    return NextResponse.redirect(url);
  }

  // If authenticated and accessing an auth route, redirect to dashboard
  if (user && isAuthRoute) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
