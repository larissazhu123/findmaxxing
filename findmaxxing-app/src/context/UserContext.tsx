"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";

interface UserContextType {
  nickname: string;
  isReady: boolean;
  refreshNickname: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  nickname: "User",
  isReady: false,
  refreshNickname: async () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [nickname, setNickname] = useState("User");
  const [isReady, setIsReady] = useState(false);

  const loadNickname = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const accessToken = session?.access_token;
      if (!accessToken) {
        setIsReady(true);
        return;
      }

      const res = await fetch("/api/user/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!res.ok) throw new Error("Failed to fetch user profile");

      const data = await res.json();
      setNickname(data.username || "User");
    } catch (err) {
      console.error("Failed to load nickname:", err);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    loadNickname();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      loadNickname();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const refreshNickname = async () => {
    await loadNickname();
  };

  return (
    <UserContext.Provider value={{ nickname, isReady, refreshNickname }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
