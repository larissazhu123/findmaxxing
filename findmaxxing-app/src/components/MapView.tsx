/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LeafletMouseEvent } from "leaflet";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabaseClient";

// ---------------- Category setup (by NAME) ----------------
const CATEGORY_EMOJI_BY_ID: Record<number, string> = {
  1: "🔑",    // keys
  2: "🪪",    // cards/id
  3: "🚰",    // water bottle (pick any you like)
  4: "💎",    // jewelry
  5: "🎧",    // headphones
  6: "👛",    // wallet
  7: "🧑‍💻",  // tech
  99: "❓",   // other
};



// ---------------- UI helpers ----------------
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
    zoomend() { onChange(map.getZoom()); },
  });
  // set initial
  useEffect(() => { onChange(map.getZoom()); }, []);
  return null;
}



function emojiIcon(emoji: string, size: number) {
  return L.divIcon({
    className: "emoji-pin",
    html: `<div style="
      font-size:${size}px;
      line-height:1;
      transform: translateY(-2px); /* nudges baseline so it sits on the point */
      text-shadow: 0 1px 2px rgba(0,0,0,.45);
    ">${emoji}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size * 0.9], // center horizontally, bottom nearly at click point
    popupAnchor: [0, -size],
  });
}


function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
      <div className="bg-black rounded-lg p-6 max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

function ClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e: LeafletMouseEvent) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

// --------------- DB types -------------------
type ListingRow = {
  id: string;
  finder_user_id: string | null;
  title: string | null;
  description: string | null;
  category_id: number | null;   // int2
  status: string | null;        // e.g., "found"
  found_at: string | null;      // ISO
  expires_at: string | null;    // ISO
  lat: number | null;
  lng: number | null;
  place_name: string | null;
  manual_address: string | null;
  image_url: string | null;     // <-- add column: ALTER TABLE public.listing ADD COLUMN IF NOT EXISTS image_url text;
  created_at?: string | null;
  updated_at?: string | null;
};

const CURRENT_USER_ID = "1"; // TEMP until you wire auth

export default function MapView() {
  const [pins, setPins] = useState<ListingRow[]>([]);
  const [selectedPin, setSelectedPin] = useState<ListingRow | null>(null);
  const [newPinCoords, setNewPinCoords] = useState<{ lat: number; lng: number } | null>(null);

  // form
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [zoom, setZoom] = useState(13);
  const markerSize = Math.max(18, Math.min(40, 18 + (zoom - 13) * 2)); // clamp 18..40


  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
    other: 99,     // keep a fallback id for “other”
  }),
  []
);


  // --------- initial fetch ----------
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

  // --------- realtime subscription ----------
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
              prev.map((p) => (p.id === (payload.new as ListingRow).id ? (payload.new as ListingRow) : p))
            );
          } else if (payload.eventType === "DELETE") {
            setPins((prev) => prev.filter((p) => p.id !== (payload.old as ListingRow).id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // --------- storage upload (optional) ----------
  async function uploadImageIfAny(file: File | null, listingId: string): Promise<string | null> {
    if (!file) return null;
    const ext = file.name.split(".").pop() || "jpg";
    const path = `listings/${listingId}.${ext}`;

    const { error } = await supabase.storage.from("listing-images").upload(path, file, { upsert: true });
    if (error) {
      console.error("upload error", error);
      setErrorMsg(error.message);
      return null;
    }

    const { data } = supabase.storage.from("listing-images").getPublicUrl(path); // bucket public
    return data.publicUrl ?? null;
  }

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
            category_id: category ? CATEGORY_MAP[category as keyof typeof CATEGORY_MAP] : null,
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
  };

  return (
    <div className="h-full w-full">
      <MapContainer center={[42.391, -72.526]} zoom={13} className="h-full w-full" style={{ zIndex: 0 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <ClickHandler onMapClick={(lat, lng) => setNewPinCoords({ lat, lng })} />

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
            icon={emojiIcon(CATEGORY_EMOJI_BY_ID[pin.category_id ?? 99] ?? "❓", markerSize)}
            eventHandlers={{ click: () => setSelectedPin(pin) }}
          />

        ))}

        <ZoomWatcher onChange={setZoom} />
      </MapContainer>

      {/* Add Pin Modal */}
      {newPinCoords && (
        <Modal onClose={() => setNewPinCoords(null)}>
          <h2 className="text-xl font-bold mb-4">Add New Pin</h2>
          {errorMsg && <p className="text-red-400 text-sm mb-2">{errorMsg}</p>}

          <form onSubmit={handleAddPin} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-700 bg-black text-white p-2 rounded"
              required
            />
            <textarea
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border border-gray-700 bg-black text-white p-2 rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && setImageFile(e.target.files[0])}
              className="border border-gray-700 bg-black text-white p-2 rounded"
            />
            {imageFile && (
              <Image
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded mb-1"
              />
            )}
            {/* <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-700 bg-black text-white p-2 rounded"
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="other">Other</option>

            </select> */
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-700 bg-black text-white p-2 rounded"
            >
              <option value="">Select category</option>
              <option value="keys">🔑 keys</option>
              <option value="cards/id">🪪 cards/id</option>
              <option value="water bottle">🚰 water bottle</option>
              <option value="jewelry">💎 jewelry</option>
              <option value="headphones">🎧 headphones</option>
              <option value="wallet">👛 wallet</option>
              <option value="tech">🧑‍💻 tech</option>
              <option value="other">❓ other</option>
            </select>
            
            }
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Pin"}
            </button>
          </form>
        </Modal>
      )}

      {/* View Pin */}
      {selectedPin && (
        <Modal onClose={() => setSelectedPin(null)}>
          <h2 className="text-xl font-bold mb-2">{selectedPin.title}</h2>
          {selectedPin.image_url && (
            <Image
              src={selectedPin.image_url}
              alt={selectedPin.title ?? "Listing image"}
              width={400}
              height={200}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <p className="mb-2">{selectedPin.description}</p>
          <p className="text-sm text-gray-400">
            <strong>Category ID:</strong> {selectedPin.category_id ?? "—"}
          </p>
        </Modal>
      )}
    </div>
  );
}
