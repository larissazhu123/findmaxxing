"use client";
import dynamic from "next/dynamic";
import { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import { PostLoginNavbar } from "@/components/PostLoginNavbar";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ListingRow } from "@/components/MapView";

// Load MapView client-side only
const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

const ITEMS_PER_PAGE = 9;

export default function DashboardPage() {
  const [pins, setPins] = useState<ListingRow[]>([]);
  const [selectedPin, setSelectedPin] = useState<ListingRow | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigateToSettings = () => {
    window.location.href = "/settings";
  };

  // Calculate pagination
  const totalPages = Math.ceil(pins.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPins = useMemo(() => pins.slice(startIndex, endIndex), [pins, startIndex, endIndex]);

  // Reset to page 1 when pins change and current page is out of bounds
  useEffect(() => {
    if (pins.length > 0 && currentPage > Math.ceil(pins.length / ITEMS_PER_PAGE)) {
      setCurrentPage(1);
    }
  }, [pins.length, currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
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
        <div className="w-2/3 h-[calc(100vh-4rem)] flex flex-col mt-16">
          <div className="p-6 pb-4">
            <h1 className="text-2xl font-semibold mb-4">Nearby Listings</h1>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-4">
            {pins.length === 0 ? (
              <p className="text-gray-600">No listings yet — add one from the map!</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {currentPins.map((p) => (
                  <ListingCard
                    key={p.id}
                    pin={p}
                    selectedPin={selectedPin}
                    setSelectedPin={setSelectedPin}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {pins.length > ITEMS_PER_PAGE && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} - {Math.min(endIndex, pins.length)} of {pins.length} listings
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <div className="text-sm text-gray-600 px-3">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
