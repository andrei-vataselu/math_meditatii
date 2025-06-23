"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Header from "../components/Header";
import Design from "../components/Design";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check for access token and refresh token in URL
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const type = searchParams.get("type");
  // Check for error in URL fragment
  const urlHash = typeof window !== 'undefined' ? window.location.hash : '';
  const errorFragment = urlHash.includes('error=') ? urlHash : '';
  let errorMessage = '';
  if (errorFragment) {
    const params = new URLSearchParams(errorFragment.replace('#', ''));
    errorMessage = params.get('error_description') || params.get('error') || 'Link invalid sau expirat.';
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // If error in fragment, do not redirect, just show error
    if (errorFragment) return;
    // Wait for fragment to be parsed before redirecting
    if (type !== "recovery" || !accessToken || !refreshToken) {
      const timeout = setTimeout(() => {
        if (type !== "recovery" || !accessToken || !refreshToken) {
          router.replace("/sign-in");
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [type, accessToken, refreshToken, router, mounted, errorFragment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!password || !confirmPassword) {
      setError("Completează ambele câmpuri.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Parolele nu coincid.");
      return;
    }
    setLoading(true);
    // Set the access and refresh token in Supabase client
    await supabase.auth.setSession({ access_token: accessToken!, refresh_token: refreshToken! });
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message || "Eroare la resetarea parolei.");
    } else {
      setSuccess(true);
      setTimeout(() => router.replace("/sign-in"), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center p-4 min-h-screen">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col justify-center items-center p-4 sm:p-6 border border-white/20 max-w-md w-full">
          {!mounted ? null : (
            errorFragment ? (
              <div className="text-center">
                <div className="text-red-400 text-4xl mb-4">!</div>
                <h2 className="text-2xl font-bold text-white mb-2">Link invalid sau expirat</h2>
                <p className="text-gray-300 mb-6">
                  {errorMessage}
                </p>
              </div>
            ) : success ? (
              <div className="text-center">
                <div className="text-green-400 text-4xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-white mb-2">Parolă resetată!</h2>
                <p className="text-gray-300 mb-6">
                  Parola a fost schimbată cu succes. Vei fi redirecționat către pagina de autentificare.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Resetează parola</h2>
                  <p className="text-gray-300">
                    Introdu noua parolă pentru contul tău.
                  </p>
                </div>
                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Parolă nouă
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
                    placeholder="Introdu parola nouă"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmă parola
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
                    placeholder="Confirmă parola nouă"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 py-3 rounded-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Se resetează..." : "Resetează parola"}
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </div>
  );
} 