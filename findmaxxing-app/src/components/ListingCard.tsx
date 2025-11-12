import Image from "next/image";
import type { ListingRow } from "./MapView";


const DEFAULT_IMAGE = "https://jtcmjgoibipkopwsvwdk.supabase.co/storage/v1/object/public/listing-images/listings/findmaxxingfinallogog.png"; // put the file in /public 

type ListingCardProps = {
  pin: ListingRow;
  selectedPin: ListingRow | null;
  setSelectedPin: React.Dispatch<React.SetStateAction<ListingRow | null>>;
};

export default function ListingCard({
  pin,
  selectedPin,
  setSelectedPin,
}: ListingCardProps) {
  const isSelected = selectedPin?.id === pin.id;

  return (
    <div
      onClick={() => setSelectedPin(pin)}
      className={`flex bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all cursor-pointer 
        ${isSelected ? "ring-2 ring-green-400" : "hover:shadow-lg"}`}
    >
      {/* Image */}
      <div className="relative w-48 h-32 flex-shrink-0">
        <Image
          src={pin.image_url ?? DEFAULT_IMAGE}
          alt={pin.title ?? "Listing image"}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {pin.title ?? "Untitled"}
          </h3>
          <p className="text-sm text-gray-400">
            {pin.description ?? "No description"}
          </p>
        </div>

        <p className="text-green-400 font-semibold">
          {(() => {
            const id = pin.category_id ?? 99;
            const names: Record<number, string> = {
              1: "Keys", 2: "Cards/ID", 3: "Water Bottle", 4: "Jewelry",
              5: "Headphones", 6: "Wallet", 7: "Tech", 99: "Other",
            };
            return names[id] ?? "Other";
          })()}
        </p>
      </div>
    </div>
  );
}
