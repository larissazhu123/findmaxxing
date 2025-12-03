import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ListingRow } from "./MapView";

const DEFAULT_IMAGE = "https://jtcmjgoibipkopwsvwdk.supabase.co/storage/v1/object/public/listing-images/listings/findmaxxingfinallogog.png";

const CATEGORY_EMOJI_BY_ID: Record<number, string> = {
  1: "🔑", // keys
  2: "🪪", // cards/id
  3: "🚰", // water bottle
  4: "💎", // jewelry
  5: "🎧", // headphones
  6: "👛", // wallet
  7: "🧑‍💻", // tech
  99: "❓", // other
};

const CATEGORY_NAMES: Record<number, string> = {
  1: "Keys",
  2: "Cards/ID",
  3: "Water Bottle",
  4: "Jewelry",
  5: "Headphones",
  6: "Wallet",
  7: "Tech",
  99: "Other",
};

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
  const categoryId = pin.category_id ?? 99;
  const categoryEmoji = CATEGORY_EMOJI_BY_ID[categoryId] || "❓";
  const categoryName = CATEGORY_NAMES[categoryId] || "Other";

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <motion.div
      onClick={() => setSelectedPin(pin)}
      className={`bg-green-50/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border transition-all cursor-pointer flex flex-col h-full
        ${isSelected ? "ring-2 ring-green-500 shadow-xl border-green-400 bg-green-100" : "border-green-200/50 hover:shadow-lg hover:border-green-300 hover:bg-green-100/90"}`}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={pin.image_url ?? DEFAULT_IMAGE}
          alt={pin.title ?? "Listing image"}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <Badge className="bg-green-700/95 text-white border-green-600 text-xs px-2 py-0.5 font-medium">
            <span className="mr-1">{categoryEmoji}</span>
            {categoryName}
          </Badge>
        </div>

        <h3 className="text-base font-semibold text-green-900 line-clamp-1 mb-1">
          {pin.title ?? "Untitled Item"}
        </h3>
        <p className="text-sm text-green-800/90 line-clamp-2 mb-3 flex-grow">
          {pin.description ?? "No description provided"}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-green-200/60">
          <div className="flex items-center gap-1.5 text-xs text-green-700/80">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatDate(pin.created_at ?? null)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
