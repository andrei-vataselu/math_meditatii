"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export function useRequireAuth(redirectTo: string = "/sign-in") {
  const { user, loading, initialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && initialized && !user) {
      router.replace(redirectTo);
    }
  }, [user, loading, initialized, router, redirectTo]);

  return {
    isAuthenticated: !!user,
    isLoading: loading || !initialized,
    user,
  };
} 