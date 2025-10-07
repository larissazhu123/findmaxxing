import { useState } from "react";
import Navbar from "../components/Navbar";

export default function MapPage() {
  const [pins, setPins] = useState<{ title: string; desc: string }[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPin = { title, desc };
    setPins([...pins, newPin]); // local update for now
    setTitle("");
    setDesc("");
    console.log("Pin submitted:", newPin);
    // TODO: Supabase insert here
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Map View</h1>
        
        {/* Map placeholder */}
        <div className="h-64 bg-gray-200 mb-6 flex items-center justify-center">
          <p>Map placeholder (click to add pins later)</p>
        </div>

        {/* Add Pin Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border p-2 rounded"
          />
          <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            Add Pin
          </button>
        </form>

        {/* Display Pins */}
        <ul className="mt-6 list-disc pl-6">
          {pins.map((pin, i) => (
            <li key={i}>
              <strong>{pin.title}</strong> – {pin.desc}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

