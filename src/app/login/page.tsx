"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth";

function LoginInner() {
  const { user, login, isLoading } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const redirect = params.get("redirect") || "/curriculum";

  useEffect(() => {
    if (!isLoading && user) router.replace(redirect);
  }, [user, isLoading, router, redirect]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      if (!email) throw new Error("Email is required");
      await login(email, password);
      router.replace(redirect);
    } catch (err: any) {
      setError(err?.message || "Failed to sign in");
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <p className="text-sm text-foreground/70 mb-6">
        Access the topics and launch notebooks in your browser.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2"
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md px-4 py-2 bg-foreground text-background font-medium hover:opacity-90"
        >
          Continue
        </button>
      </form>
      <div className="mt-6 text-xs text-foreground/60">
        Authentication is stubbed for now and runs entirely in your browser.
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-sm text-foreground/70">Loading…</div>}>
      <LoginInner />
    </Suspense>
  );
}
