/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // ensures this runs client-side only
import Image from "next/image";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LeafletMouseEvent } from "leaflet";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

const PinIcon = L.icon({
  iconUrl: "/pin.svg", // points to /public/pin.svg
  iconSize: [32, 32], // adjust size to match your SVG design
  iconAnchor: [16, 32], // point of the icon that corresponds to marker location
});

// Modal (for adding pins and viewing details)
function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[1000]">
      <div className="bg-black rounded-lg p-6 max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

// Handles map click events
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

export default function MapView() {
  const [pins, setPins] = useState<any[]>([]);
  const [selectedPin, setSelectedPin] = useState<any | null>(null);
  const [newPinCoords, setNewPinCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleAddPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPinCoords) return;

    const newPin = {
      id: Date.now(),
      title,
      desc,
      category,
      image: imageFile ? URL.createObjectURL(imageFile) : "",
      lat: newPinCoords.lat,
      lng: newPinCoords.lng,
    };

    setPins((prev) => [...prev, newPin]);
    setNewPinCoords(null);
    setTitle("");
    setDesc("");
    setCategory("");
    setImageFile(null);
  };

  return (
    <div className="h-full w-full">
      <MapContainer
        center={[42.391, -72.526]}
        zoom={13}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <ClickHandler
          onMapClick={(lat, lng) => {
            setNewPinCoords({ lat, lng });
          }}
        />

        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.lng]}
            icon={PinIcon}
            eventHandlers={{
              click: () => setSelectedPin(pin),
            }}
          />
        ))}
      </MapContainer>

      {/* Add Pin Modal */}
      {newPinCoords && (
        <Modal onClose={() => setNewPinCoords(null)}>
          <h2 className="text-xl font-bold mb-4">Add New Pin</h2>
          <form onSubmit={handleAddPin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded"
              required
            />
            <textarea
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border p-2 rounded"
            />
            {/* File input for image upload */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImageFile(e.target.files[0]);
                }
              }}
              className="border p-2 rounded"
            />
            {/* Preview selected image */}
            {imageFile && (
              <Image
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save Pin
            </button>
          </form>
        </Modal>
      )}

      {/* View Pin Info Modal */}
      {selectedPin && (
        <Modal onClose={() => setSelectedPin(null)}>
          <h2 className="text-xl font-bold mb-2">{selectedPin.title}</h2>
          {selectedPin.image && (
            <Image
              src={selectedPin.image}
              alt={selectedPin.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <p className="mb-2">{selectedPin.desc}</p>
          <p className="text-sm text-gray-600">
            <strong>Category:</strong> {selectedPin.category || "None"}
          </p>
        </Modal>
      )}
    </div>
  );
}
