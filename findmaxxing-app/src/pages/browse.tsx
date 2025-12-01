"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import type { ListingRow } from "@/components/MapView";
//handles both mapview and listing card components
// mapview client-side only
const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function BrowsePage() {
  const [pins, setPins] = useState<ListingRow[]>([]);
  const [selectedPin, setSelectedPin] = useState<ListingRow | null>(null);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black text-white">
      {/* LEFT: Map */}
      <div className="w-1/3 h-full border-r border-gray-800">
        <MapView
          pins={pins}
          setPins={setPins}
          selectedPin={selectedPin}
          setSelectedPin={setSelectedPin}
        />
      </div>

      {/* RIGHT: Listing Feed */}
      <div className="w-2/3 h-full overflow-y-auto p-6 space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Nearby Listings</h1>

        {pins.length === 0 ? (
          <p className="text-gray-500">
            No listings yet — add one from the map!
          </p>
        ) : (
          pins.map((p) => (
            <ListingCard
              key={p.id}
              pin={p}
              selectedPin={selectedPin}
              setSelectedPin={setSelectedPin}
            />
          ))
        )}
      </div>
    </div>
  );
}

