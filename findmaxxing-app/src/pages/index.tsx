import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to FindMaxxing</h1>
      <p className="mb-6 text-gray-600">A simple platform to share and find listings.</p>
      <Link href="/login" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Get Started
      </Link>
    </main>
  );
}