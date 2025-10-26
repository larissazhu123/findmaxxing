import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient"; // 👈 Import your Supabase client

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle email/password login (you can wire this up later)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // TODO: Replace with Supabase email/password login if you want
    router.push("/browse");
  };


  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${window.location.origin}/`,  // Redirect to /browse after successful login
        },
    });

    if (error) {
        console.error('Error during sign-in:', error.message);
        return;
    }

    // Listen for auth state changes and session changes
    supabase.auth.onAuthStateChange(async (event, session) => {
        if (session) {
            // Wait for the session to be fully ready (maybe add a small delay to handle race conditions)
            const userEmail = session.user.email!;
            const domain = userEmail.split('@')[1].toLowerCase().trim(); // Case-insensitive, remove any spaces

            if (domain !== 'umass.edu') {
                await supabase.auth.signOut();  // Sign out if domain doesn't match
                alert("Access restricted to umass.edu emails only.");
                window.location.replace(window.location.origin); // Redirect to home or another page
            } else {
                // Redirect to /browse if the domain is valid
                window.location.replace('/browse');
            }
        }
    });
};

// Optionally add session check on page load:
const useAuthSession = () => {
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session) {
                const userEmail = session.user.email!;
                const domain = userEmail.split('@')[1].toLowerCase().trim(); // Case-insensitive domain check

                if (domain !== 'umass.edu') {
                    await supabase.auth.signOut();
                    alert("Access restricted to umass.edu emails only.");
                    router.replace('/');  // Redirect to home page
                } else {
                    router.replace('/browse');  // Valid domain, go to /browse
                }
            }
        };

        checkSession();
    }, [router]);
};

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {/* Existing email/password form */}
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-72">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {/* 👇 New Google sign-in section */}
      <div className="mt-6 flex flex-col items-center">
        <p className="mb-2 text-gray-600">or</p>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white border rounded shadow hover:bg-gray-50"
        >
          {/* Optional Google "G" icon */}
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>

      <p className="mt-4">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </main>
  );
}
