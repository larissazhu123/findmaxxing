import { useRouter } from "next/router";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    // TODO: Replace with real Supabase Google sign-up
    router.push("/userpref");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <button
        onClick={handleRegister}
        className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 mb-4"
      >
        Sign Up with Google
      </button>
      <p className="mt-4 text-gray-600">You’ll be asked to set up your profile next.</p>
    </main>
  );
}
