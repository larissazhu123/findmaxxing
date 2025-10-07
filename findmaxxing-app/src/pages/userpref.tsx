import { useState } from "react";
import { useRouter } from "next/router";

export default function UserPrefPage() {
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nickname chosen:", nickname);
    // TODO: Save to Supabase profile
    router.push("/map");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Set Up Your Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter nickname"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save and Continue
        </button>
      </form>
    </main>
  );
}
