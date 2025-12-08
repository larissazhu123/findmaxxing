/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LeafletMouseEvent } from "leaflet";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, MapPin, Upload } from "lucide-react";

const CATEGORY_EMOJI_BY_ID: Record<number, string> = {
  1: "🔑", // keys
  2: "🪪", // cards/id
  3: "🚰", // water bottle (pick any you like)
  4: "💎", // jewelry
  5: "🎧", // headphones
  6: "👛", // wallet
  7: "🧑‍💻", // tech
  99: "❓", // other
};

const DEFAULT_IMAGE = "https://jtcmjgoibipkopwsvwdk.supabase.co/storage/v1/object/public/listing-images/listings/findmaxxingfinallogog.png"; // leading slash, served from /public
// C:\Users\lzhu2\Documents\LarissaCollege2\findmaxxing\findmaxxing\findmaxxingfinallogog.png

const MAP_THEME_URLS = {
  default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};


// const PinIcon = L.icon({
//   iconUrl: "/pin.svg",
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
// });

// function PinIcon(emoji: string) {
//   return L.divIcon({
//     className: "emoji-pin",
//     html: `<div style="
//       font-size:22px;line-height:22px;width:28px;height:28px;
//       display:flex;align-items:center;justify-content:center;
//       border-radius:14px;background:#111;color:#fff;
//       border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);
//     ">${emoji}</div>`,
//     iconSize: [28, 28],
//     iconAnchor: [14, 28],
//     popupAnchor: [0, -28],
//   });
// }

function ZoomWatcher({ onChange }: { onChange: (z: number) => void }) {
  const map = useMapEvents({
    zoomend() {
      onChange(map.getZoom());
    },
  });
  // set initial
  useEffect(() => {
    onChange(map.getZoom());
  }, []);
  return null;
}

function emojiIcon(emoji: string, size: number) {
  const px = size;
  return L.divIcon({
    className: "emoji-pin",
    html: `
      <div style="
        width:${px}px;height:${px}px;display:flex;align-items:center;justify-content:center;
        border-radius:9999px;
        background:rgba(0,0,0,.72);
        border:2px solid #fff;
        box-shadow:0 4px 10px rgba(0,0,0,.45);
        color:#fff;font-size:${Math.round(px*0.7)}px;line-height:1;
        text-shadow:0 1px 1px rgba(0,0,0,.8), 0 0 6px rgba(0,0,0,.55);
        transform: translateY(-2px);
      ">
        ${emoji}
      </div>`,
    iconSize: [px, px],
    iconAnchor: [px / 2, px * 0.9],
    popupAnchor: [0, -px],
  });
}


function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1000] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleBackdropClick}
      >
        <motion.div 
          className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl max-w-md w-full relative border border-gray-200"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MapCenterHandler({ selectedPin }: { selectedPin: ListingRow | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedPin && selectedPin.lat && selectedPin.lng) {
      map.setView([selectedPin.lat, selectedPin.lng], 16, { animate: true });
    }
  }, [selectedPin, map]);

  return null; // this component doesn’t render anything visual
}
function ClickHandler({
  onMapClick,
}: {
  onMapClick: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e: LeafletMouseEvent) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export type ListingRow = {
  id: string;
  finder_user_id: string | null;
  title: string | null;
  description: string | null;
  category_id: number | null; // int2
  status: string | null; // e.g., "found"
  found_at: string | null; // ISO
  expires_at: string | null; // ISO
  lat: number | null;
  lng: number | null;
  place_name: string | null;
  manual_address: string | null;
  image_url: string | null; 
  created_at?: string | null;
  updated_at?: string | null;
};

const CURRENT_USER_ID = "1"; // TEMP until you wire auth

export default function MapView({
  pins,
  setPins,
  selectedPin,
  setSelectedPin,
}: {
  pins: ListingRow[];
  setPins: React.Dispatch<React.SetStateAction<ListingRow[]>>;
  selectedPin: ListingRow | null;
  setSelectedPin: React.Dispatch<React.SetStateAction<ListingRow | null>>;
}) {
  const [newPinCoords, setNewPinCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // form
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [zoom, setZoom] = useState(13);
  const markerSize = Math.max(18, Math.min(40, 18 + (zoom - 13) * 2)); // clamp 18..40

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [mapTheme, setMapTheme] = useState<"default" | "light" | "dark">("default");

  // map UI category -> DB category_id (agree this mapping with backend)
  // const CATEGORY_MAP = useMemo(
  //   () => ({
  //     electronics: 1,
  //     clothing: 2,
  //     books: 3,
  //     other: 99,
  //   }),
  //   []
  // );

  const CATEGORY_MAP = useMemo(
    () => ({
      keys: 1,
      "cards/id": 2,
      "water bottle": 3,
      jewelry: 4,
      headphones: 5,
      wallet: 6,
      tech: 7,
      other: 99, // keep a fallback id for “other”
    }),
    []
  );

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("listing")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setErrorMsg(error.message);
        return;
      }
      setPins((data as ListingRow[]) ?? []);
    })();
  }, []);

 
  useEffect(() => {
    const channel = supabase
      .channel("listing-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "listing" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setPins((prev) => [payload.new as ListingRow, ...prev]);
          } else if (payload.eventType === "UPDATE") {
            setPins((prev) =>
              prev.map((p) =>
                p.id === (payload.new as ListingRow).id
                  ? (payload.new as ListingRow)
                  : p
              )
            );
          } else if (payload.eventType === "DELETE") {
            setPins((prev) =>
              prev.filter((p) => p.id !== (payload.old as ListingRow).id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);


  async function uploadImageIfAny(
    file: File | null,
    listingId: string,
    defaultUrl: string = DEFAULT_IMAGE
  ): Promise<string | null> {
    if (!file) return defaultUrl;
    const ext = file.name.split(".").pop() || "jpg";
    const path = `listings/${listingId}.${ext}`;

    const { error } = await supabase.storage
      .from("listing-images")
      .upload(path, file, { upsert: true });
    if (error) {
      console.error("upload error", error);
      setErrorMsg(error.message);
      return defaultUrl;
    }


    const { data } = supabase.storage.from("listing-images").getPublicUrl(path); // bucket public
    // if (data.publicUrl !== null && data.publicUrl !== undefined) {
    //   updatePoints(2, "uploading a picture with the lost item")
    // }
    return data.publicUrl ?? defaultUrl;
  }
 

  const updatePoints = async (pointsGained: number, achievement: string) => { //Takes in the number of points gained and how user gained them
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    if (!accessToken) return alert("Not authenticated.");

    try {
      const res = await fetch("/api/user/updatePoints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ pointsAwarded: pointsGained }),
      });

      if (res.ok) {
        alert(`Great Job, you gained +${pointsGained} points for ${achievement}!`);
      } else {
        const err = await res.json();
        alert(`Failed to update : ${err.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error updating points:", err);
      alert("An error occurred while updating your points.");
    }
  };


  // --------- insert listing ----------
  const handleAddPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPinCoords) return;

    try {
      setSaving(true);
      setErrorMsg(null);

      const id = uuidv4();
      const now = new Date();
      const expires = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

      const image_url = await uploadImageIfAny(imageFile, id);

      const { data, error } = await supabase
        .from("listing")
        .insert([
          {
            id,
            finder_user_id: CURRENT_USER_ID, // hardcoded for now
            title,
            description: desc,
            category_id: category
              ? CATEGORY_MAP[category as keyof typeof CATEGORY_MAP]
              : null,
            status: "active",
            found_at: now.toISOString(),
            expires_at: expires.toISOString(),
            lat: newPinCoords.lat,
            lng: newPinCoords.lng,
            place_name: null,
            manual_address: null,
            image_url,
          } satisfies Partial<ListingRow>,
        ])
        .select("*")
        .single();

      if (error) throw error;

      // optimistic update (Realtime will also push it)
      setPins((prev) => [data as ListingRow, ...prev]);

      // reset form
      setNewPinCoords(null);
      setTitle("");
      setDesc("");
      setCategory("");
      setImageFile(null);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message ?? "Failed to save listing.");
    } finally {
      setSaving(false);
    }

    //Adds 10 points whenever a user submits a pin
    await updatePoints(10, "submitting a lost item"); 
  };

  // --------- claim listing ----------
  async function handleClaimPin(id: string) {
    try {
      const { error } = await supabase.from("listing").delete().eq("id", id);
      if (error) throw error;

      // Update local state immediately
      setPins((prev) => prev.filter((p) => p.id !== id));
 
      // Close modal
      setSelectedPin(null);
    } catch (err: any) {
      console.error("Error claiming pin:", err.message);
      alert("Failed to claim listing. Please try again.");
    }
  }

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[42.3895, -72.526]} // roughly UMass Amherst campus
        zoom={15}
        minZoom={14}
        maxZoom={18}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
        maxBounds={[
          [42.36, -72.56], // Southwest corner
          [42.42, -72.49], // Northeast corner
        ]}
        maxBoundsViscosity={1.0} // prevents panning outside Amherst
      >
        <TileLayer
          url={MAP_THEME_URLS[mapTheme]}
          attribution="© OpenStreetMap contributors"
        />
        <MapCenterHandler selectedPin={selectedPin} />
        <ClickHandler
          onMapClick={(lat, lng) => setNewPinCoords({ lat, lng })}
        />

        {pins.map((pin) => (
          // <Marker
          //   key={pin.id}
          //   position={[pin.lat ?? 0, pin.lng ?? 0]}
          //   icon={PinIcon}
          //   eventHandlers={{ click: () => setSelectedPin(pin) }}
          // />
          <Marker
            key={pin.id}
            position={[pin.lat ?? 0, pin.lng ?? 0]}
            icon={emojiIcon(
              CATEGORY_EMOJI_BY_ID[pin.category_id ?? 99] ?? "❓",
              markerSize
            )}
            eventHandlers={{ click: () => setSelectedPin(pin) }}
          />
        ))}

        <ZoomWatcher onChange={setZoom} />
      </MapContainer>

      <div className="absolute top-4 right-4 z-[1000] bg-white rounded-lg shadow-md border border-gray-200">
        <Select 
          value={mapTheme} 
          onValueChange={(v) => setMapTheme(v as "default" | "light" | "dark")}
        >
          <SelectTrigger className="w-[140px] h-10 border-0 focus:ring-0">
            <div className="flex items-center gap-2">
              {/* I removed the <Layers /> component here */}
              <SelectValue placeholder="Theme" />
            </div>
          </SelectTrigger>
          <SelectContent position="popper" align="end">
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Add Pin Modal */}
      {newPinCoords && (
        <Modal onClose={() => setNewPinCoords(null)}>
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-lg p-2">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-green-600">Add New Pin</CardTitle>
              </div>
              {errorMsg && (
                <motion.div 
                  className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errorMsg}
                </motion.div>
              )}
            </CardHeader>
            
            <CardContent className="space-y-4">
              <form onSubmit={handleAddPin} className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="What did you find?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    placeholder="Describe the item and where you found it..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="z-[1001]">
                      <SelectItem value="keys">🔑 Keys</SelectItem>
                      <SelectItem value="cards/id">🪪 Cards/ID</SelectItem>
                      <SelectItem value="water bottle">🚰 Water Bottle</SelectItem>
                      <SelectItem value="jewelry">💎 Jewelry</SelectItem>
                      <SelectItem value="headphones">🎧 Headphones</SelectItem>
                      <SelectItem value="wallet">👛 Wallet</SelectItem>
                      <SelectItem value="tech">🧑‍💻 Tech</SelectItem>
                      <SelectItem value="other">❓ Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="image">Photo (Optional)</Label>
                  <div className="relative">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        e.target.files?.[0] && setImageFile(e.target.files[0])
                      }
                      className="h-12 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {imageFile && (
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => setImageFile(null)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                <div className="flex gap-3 pt-2">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setNewPinCoords(null)}
                      className="w-full h-12 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-colors"
                    >
                      Cancel
                    </Button>
                  </motion.div>
                  <Button
                    type="submit"
                    disabled={saving}
                    className="flex-1 h-12 bg-green-600 hover:bg-green-700"
                  >
                    {saving ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Saving...
                      </div>
                    ) : (
                      "Save Pin"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Modal>
      )}

      {/* View Pin */}
      {selectedPin && (
        <Modal onClose={() => setSelectedPin(null)}>
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-lg p-2">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-green-600">{selectedPin.title}</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {selectedPin.image_url && (
                <div className="relative">
                  <Image
                    src={selectedPin.image_url}
                    alt={selectedPin.title ?? "Listing image"}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg border border-gray-200"
                  />
                </div>
              )}
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-600">Description</Label>
                  <p className="text-gray-800">{selectedPin.description || "No description provided"}</p>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-600">Category</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {selectedPin.category_id ? CATEGORY_EMOJI_BY_ID[selectedPin.category_id] || "❓" : "❓"}
                    </span>
                    <span className="text-gray-800">
                      {selectedPin.category_id
                        ? (Object.keys(CATEGORY_MAP) as Array<keyof typeof CATEGORY_MAP>)
                            .find((key) => CATEGORY_MAP[key] === selectedPin.category_id) || "Unknown"
                        : "Unknown"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSelectedPin(null)}
                    className="w-full h-12 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-colors"
                  >
                    Close
                  </Button>
                </motion.div>
                <Button
                  onClick={() => {
                    if (confirm("Would you like to claim this listing?")) {
                      handleClaimPin(selectedPin.id);
                    }
                  }}
                  className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white"
                >
                  Claim
                </Button>
              </div>
            </CardContent>
          </Card>
        </Modal>
      )}
    </div>
  );
}