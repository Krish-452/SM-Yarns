'use client';

import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { logisticsLocations } from '@/data/company';

// Extracted to prevent Leaflet panic re-renders
const MAP_CENTER: [number, number] = [22.9734, 78.6569];
const INDIA_MAX_BOUNDS: [[number, number], [number, number]] = [[6.4626, 68.1097], [35.5133, 97.3953]];

export default function DeliveryMap() {
  const customRedIcon = useMemo(() => {
    return L.divIcon({
      className: 'bg-transparent border-none',
      html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" style="width: 32px; height: 32px; filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  }, []);

  return (
    <div className="w-full flex-col gap-6 text-left">
      <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-white/10 z-0 relative">
        <MapContainer
          center={MAP_CENTER}
          zoom={4}
          scrollWheelZoom={true}
          zoomControl={false}
          touchZoom={true}
          maxBounds={INDIA_MAX_BOUNDS}
          minZoom={2}
          className="w-full h-full bg-[#e5e7eb]"
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {logisticsLocations.map((loc) => (
            <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={customRedIcon}>
              <Tooltip permanent direction="top" offset={[0, -32]} className="map-label-tooltip">
                {loc.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
