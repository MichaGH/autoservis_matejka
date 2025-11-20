"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Oprava ikon Leafletu
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const RealMapComponent= () => {
  const position = [49.052298194403846, 18.916140275371166];
  const zoom= 13;

  const handleNavigate = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-2xl w-full mx-auto py-6 text-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">
        Najdete nás na...{" "}
        <span className="text-yellow-400">Kollárova 73, Martin</span>
      </h2>

      <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden shadow-md z-0">
        <MapContainer center={position} zoom={zoom} className="w-full h-full z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap'
          />
          <Marker position={position}>
            <Popup>Tu nás nájdete!</Popup>
          </Marker>
        </MapContainer>
      </div>

      <button
        onClick={handleNavigate}
        className="px-6 py-3 bg-black border-2 border-yellow-400 text-gray-200 font-semibold rounded-lg hover:bg-yellow-500/50 transition"
      >
        Navigovať
      </button>
    </div>
  );
};

export default RealMapComponent;
