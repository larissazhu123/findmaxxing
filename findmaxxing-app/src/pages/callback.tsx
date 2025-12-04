"use client";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const userEmail = session.user.email!;
      const domain = userEmail.split("@")[1].toLowerCase();

      if (domain !== "umass.edu") {
        await supabase.auth.signOut();
        alert("Access restricted to umass.edu emails only.");
        return router.replace("/");
      }

      const accessToken = session.access_token;
      console.log("Syncing user profile to DB...");

      const res = await fetch("/api/auth/syncUser", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: session.user.id,
          email: session.user.email,
        }),
      });

      if (!res.ok) {
        console.error("syncUser failed:", await res.text());
        alert("Login failed syncing profile. Please try again.");
        return router.replace("/");
      }

      console.log("User sync success — redirecting to dashboard.");
      router.replace("/dashboard");
    };

    handleAuth();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Finishing login...</p>
    </div>
  );
}
