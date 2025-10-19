import { useState } from "react";
import { useRouter } from "next/router";

export default function UserPrefPage() {
  const [nickname, setNickname] = useState("");
  const [notificationsOn, setNotificationsOn] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User preferences saved:", { nickname, notificationsOn });
    // TODO: Save to Supabase profile
    router.push("/browse");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Set Up Your Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-72">
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Notifications Switch */}
        <div className="flex items-center justify-between">
          <label htmlFor="notifications" className="font-semibold">
            Notifications
          </label>
          <input
            id="notifications"
            type="checkbox"
            checked={notificationsOn}
            onChange={() => setNotificationsOn(!notificationsOn)}
            className="h-5 w-5"
          />
        </div>

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
