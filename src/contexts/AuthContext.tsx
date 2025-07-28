"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useMemo, useCallback } from 'react';
import {
  signOut as signOutApi,
  getCurrentUser,
  updateUserProfile,
  getUserPlan as getUserPlanApi
} from '@/lib/authApi';

interface UserProfile {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

interface PlanType {
  _id: string;
  name: string;
  price: number;
  features: string[];
  isActive: boolean;
}

interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

type AuthContextType = AuthState & {
  signOut: () => Promise<void>;
  plan: PlanType | null;
  updateProfile: (updates: Partial<{ firstName: string; lastName: string; phoneNumber: string }>) => Promise<{ error: { message: string } | null }>;
  clearError: () => void;
  refreshProfile: () => Promise<void>;
  resetAuth: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function getUserPlan(): Promise<PlanType | null> {
  const { data, error } = await getUserPlanApi();
  if (error || !data) {
    return null;
  }
  return data.plan as PlanType;
}


export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
    initialized: false
  });
  const [plan, setPlan] = useState<PlanType | null>(null);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const resetAuth = useCallback(() => {
    setState({
      user: null,
      loading: true,
      error: null,
      initialized: false
    });
    setPlan(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    try {
      const { data, error } = await getCurrentUser();
      if (error) {
        setState(prev => ({ ...prev, user: null, error: error.message }));
        return;
      }
      setState(prev => ({ ...prev, user: data.user, error: null }));
      // Refresh plan
      const planData = await getUserPlan();
      setPlan(planData);
    } catch {
      setState(prev => ({ ...prev, error: 'Eroare la actualizarea profilului' }));
    }
  }, []);

  const updateProfile = useCallback(async (updates: Partial<{ firstName: string; lastName: string; phoneNumber: string }>) => {
    try {
      const { data, error } = await updateUserProfile(updates);
      if (error) return { error };
      if (data) setState(prev => ({ ...prev, user: data.user, error: null }));
      return { error: null };
    } catch {
      return { error: { message: 'Eroare la actualizarea profilului' } };
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { error } = await signOutApi();
      if (error) {
        setState(prev => ({ ...prev, loading: false, error: error.message }));
        return;
      }
      setState({ user: null, loading: false, error: null, initialized: true });
      setPlan(null);
    } catch {
      setState(prev => ({ ...prev, loading: false, error: 'Eroare la deconectare' }));
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    const initializeAuth = async () => {
      try {
        const { data, error } = await getCurrentUser();
        if (mounted) {
          // If error is 401, treat as no access token (not logged in)
          if (error && (error.message?.includes('401') || error.message?.toLowerCase().includes('no access token'))) {
            setState(prev => ({
              ...prev,
              user: null,
              loading: false,
              initialized: true,
              error: 'No access token provided'
            }));
            setPlan(null);
            return;
          }
          setState(prev => ({
            ...prev,
            user: data?.user ?? null,
            loading: false,
            initialized: true,
            error: error?.message || null
          }));
          if (data?.user) {
            const planData = await getUserPlan();
            setPlan(planData);
          }
        }
      } catch (err) {
        if (mounted) {
          // If error is 401, treat as no access token
          if (err?.message?.includes('401') || err?.message?.toLowerCase().includes('no access token')) {
            setState(prev => ({
              ...prev,
              user: null,
              loading: false,
              initialized: true,
              error: 'No access token provided'
            }));
            setPlan(null);
          } else {
            setState(prev => ({ ...prev, loading: false, error: 'Eroare la inițializarea autentificării', initialized: true }));
          }
        }
      }
    };
    initializeAuth();
    return () => { mounted = false; };
  }, []);

  const contextValue = useMemo(() => ({
    ...state,
    signOut,
    plan,
    updateProfile,
    clearError,
    refreshProfile,
    resetAuth
  }), [state, signOut, updateProfile, clearError, refreshProfile, resetAuth, plan]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}



export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useUser() {
  const { user, loading, error, initialized } = useAuth();
  const memoizedUser = useMemo(() => {
    if (!user) return null;
    return {
      emailAddresses: [{ emailAddress: user.email }],
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      username: user.email?.split('@')[0],
      ...user
    };
  }, [user]);
  const isLoaded = initialized && !loading;
  return {
    isSignedIn: !!user,
    isLoaded,
    user: memoizedUser,
    error
  };
}


