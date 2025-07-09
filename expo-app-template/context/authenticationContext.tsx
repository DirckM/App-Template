import { supabase } from '@/lib/utils/supabaseClient';
import { Session } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

//Remember that a context is a way to store data that can be accessed by any component in the application
//It is a way to share data between components without having to pass props through multiple levels of the component tree
//It is a way to store data that can be accessed by any component in the application
//It is a way to share data between components without having to pass props through multiple levels of the component tree

// Define the type for the authentication context
type AuthContextType = {
  session: Session | null;
  signUpNewUser: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; data: any; error: any }>;
  signInUser: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; data?: any; error?: any }>;
  signOut: () => Promise<{ success: boolean; data?: any; error?: any }>;
  resetPassword: (
    email: string,
    options?: { redirectTo?: string },
  ) => Promise<{ success: boolean; error?: any }>;
  validateEmail: (email: string) => boolean;
  validatePassword: (password: string) => boolean;
  loading: boolean;
};

// Context creation with default (safe fallback values)
const AuthContext = createContext<AuthContextType>({
  session: null,
  signUpNewUser: async () => ({ success: false, data: null, error: null }),
  signInUser: async () => ({ success: false, data: null, error: null }),
  signOut: async () => ({ success: false, data: null, error: null }),
  resetPassword: async () => ({ success: false, error: null }),
  validateEmail: () => false,
  validatePassword: () => false,
  loading: true,
});

//This is the provider that will wrap the application and provide the authentication context to all components
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error fetching session:', error);
          setLoading(false);
          return;
        }
        setSession(data.session);
      } catch (err) {
        console.error('Unexpected error getting session:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
        return { success: false, data: null, error };
      }
      return { success: true, data: null, error: null };
    } catch (err: any) {
      console.error('Unexpected error during sign-out:', err.message || err);
      return { success: false, data: null, error: err.message || err };
    }
  };

  //This is the function that will be used to validate the email
  const validateEmail = (str: string) => {
    if (!str) return false;
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
  };

  //This is the function that will be used to validate the email
  const validatePassword = (str: string): boolean => {
    if (!str) return false;
    // At least 8 characters, and at least one special character
    const pattern =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    return pattern.test(str);
  };

  //This is the function that will be used to sign up a new user
  const signUpNewUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Error signing up new user:', error);
        return { success: false, data: null, error };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error occurred during sign-up:', error);
      return { success: false, data: null, error };
    }
  };

  //This is the function that will be used to sign in a user
  const signInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log('Sign-in error occurred:', error.message);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (err: any) {
      console.log('Unexpected error occurred during sign-in:', err.message);
      return { success: false, error: err.message };
    }
  };

  const resetPassword = async (
    email: string,
    options?: { redirectTo?: string },
  ) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: options?.redirectTo, // pass it if provided
      });
      if (error) {
        console.error('Error sending reset password email:', error.message);
        return { success: false, error };
      }
      return { success: true, data };
    } catch (err: any) {
      console.error('Unexpected error during password reset:', err.message);
      return { success: false, error: err.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        signUpNewUser,
        signInUser,
        signOut,
        resetPassword,
        validateEmail,
        validatePassword,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
