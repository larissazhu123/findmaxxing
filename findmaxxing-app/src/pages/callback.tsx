// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// //auth handler, redirects based on email domain
// export default function AuthCallback() {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRedirect = async () => {
//       const { data, error } = await supabase.auth.getUser();

//       if (error || !data?.user) {
//         console.error('Auth error:', error);
//         router.replace('/login');
//         return;
//       }

//       const email = data.user.email;
//       if(email === undefined){
//         throw "Error email is not defined"
//       }
//       const domain = email.split('@')[1];

//       if (domain !== 'umass.edu') {
//         alert("Access restricted to umass.edu emails only.");
//         router.replace('/');
//       } else { // domain === "umass.edu"
//         router.replace('/dashboard');
//       } 
//     };
//     handleRedirect();
    
//   }, [router]);

//   return <p>Redirecting after sign-in...</p>;
// }

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
      await fetch("/api/auth/syncUser", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
 
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