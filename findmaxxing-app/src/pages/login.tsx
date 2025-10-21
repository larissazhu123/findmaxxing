import { useState } from "react";
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

  // 👇 Add this new function for Google sign-in
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/browse" //replace with actual url when needed
      }
    });
    if (error) console.error("Error signing in with Google:", error.message);
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
