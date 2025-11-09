"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import { PostLoginNavbar } from "@/components/PostLoginNavbar";
import ListingCard from "@/components/ListingCard";
import type { ListingRow } from "@/components/MapView";

// Load MapView client-side only
const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function DashboardPage() {
  const [pins, setPins] = useState<ListingRow[]>([]);
  const [selectedPin, setSelectedPin] = useState<ListingRow | null>(null);

  const handleNavigateToSettings = () => {
    window.location.href = "/settings";
  };

  return (
    <>
      <Head>
        <title>Browse Items - FindMaxxing</title>
        <meta name="description" content="Browse lost and found items on the UMass campus" />
      </Head>

      <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 text-gray-900">
        <PostLoginNavbar
          currentView="list"
          onNavigate={(view) => {
            if (view === "settings") handleNavigateToSettings();
          }}
          onReportItem={() => alert("Report item functionality coming soon!")}
          unreadNotifications={3}
        />

        {/* LEFT: Map */}
        <div className="w-1/3 h-[calc(100vh-4rem)] border-r border-gray-200 mt-16">
          <MapView
            pins={pins}
            setPins={setPins}
            selectedPin={selectedPin}
            setSelectedPin={setSelectedPin}
          />
        </div>

        {/* RIGHT: Listing Feed */}
        <div className="w-2/3 h-[calc(100vh-4rem)] overflow-y-auto p-6 space-y-4 mt-16">
          <h1 className="text-2xl font-semibold mb-4">Nearby Listings</h1>

          {pins.length === 0 ? (
            <p className="text-gray-600">No listings yet — add one from the map!</p>
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
    </>
  );
}
