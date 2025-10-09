import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Dynamically import the MapView so it only loads client-side
const MapView = dynamic(() => import("../components/MapView"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow relative">
        <MapView />
      </div>
    </div>
  );
}
