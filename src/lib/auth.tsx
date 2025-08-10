"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type AuthUser = { id: string; email: string } | null;

interface AuthContextValue {
  user: AuthUser;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const LOCAL_STORAGE_KEY = "ceo_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const value = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (value) setUser(JSON.parse(value));
    } catch {}
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, _password: string) => {
    // Stubbed auth: accept any email/password and persist locally
    const fakeUser = { id: crypto.randomUUID(), email };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fakeUser));
    setUser(fakeUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, isLoading, login, logout }), [user, isLoading, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      const redirect = encodeURIComponent(pathname || "/");
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [isLoading, user, router, pathname]);

  if (!user) return null;
  return <>{children}</>;
}
