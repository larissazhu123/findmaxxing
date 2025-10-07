import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Replace with real Supabase Google login
    router.push("/map");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 mb-4"
      >
        Login with Google
      </button>
      <p>
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </main>
  );
}
