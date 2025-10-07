import Navbar from "../components/Navbar";

export default function ListPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">List View</h1>
        <ul className="list-disc pl-6">
          <li>Example Listing 1</li>
          <li>Example Listing 2</li>
        </ul>
      </main>
    </div>
  );
}
