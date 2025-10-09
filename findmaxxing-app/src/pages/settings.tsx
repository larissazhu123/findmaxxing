import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SettingsPage() {
  const [nickname, setNickname] = useState("MyNickname");
  const [notificationsOn, setNotificationsOn] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saved settings:", { nickname, notificationsOn });
    // TODO: update Supabase user + user_pref
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Settings</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Change Nickname */}
          <div>
            <label htmlFor="nickname" className="block mb-2 font-semibold">
              Nickname
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>

          {/* Notifications On/Off */}
          <div>
            <label htmlFor="notifications" className="block mb-2 font-semibold">
              Notifications
            </label>
            <select
              id="notifications"
              value={notificationsOn ? "on" : "off"}
              onChange={(e) => setNotificationsOn(e.target.value === "on")}
              className="border rounded p-2 w-full"
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Settings
          </button>
        </form>
      </main>
    </div>
  );
}
