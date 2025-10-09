import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Left side: navigation links */}
      <div className="flex gap-4">
        <Link href="/map" className="hover:underline">Map</Link>
        <Link href="/list" className="hover:underline">List</Link>
        <Link href="/settings" className="hover:underline">Settings</Link>
      </div>

      {/* Right side: home button (logo placeholder) */}
      <div>
        <Link href="/">
          {/* Replace this later with your logo */}
          <span className="text-xl hover:opacity-80 cursor-pointer">🏠</span>
        </Link>
      </div>
    </nav>
  );
}