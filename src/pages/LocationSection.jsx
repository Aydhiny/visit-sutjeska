import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

const LocationSection = () => {
  const mapRef = useRef(null); // Create a ref for the map container

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapRef.current).setView([44.0639, 18.1587], 13); // Coordinates for Kraljeva Sutjeska

    // Add OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker for Kraljeva Sutjeska
    L.marker([44.0639, 18.1587]).addTo(map)
      .bindPopup('Welcome to Kraljeva Sutjeska!');

    // Cleanup function to remove the map when the component unmounts
    return () => {
      map.remove(); // Remove the map instance
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <section id="location" className="mb-16">
      <h2 className="text-4xl font-bold mb-4 text-white">Location</h2>
      <p className="md:text-lg text-white">
        Find us on the map and plan your visit to Kraljeva Sutjeska.
      </p>
      {/* Leaflet Map Container with ref */}
      <div ref={mapRef} className="w-full h-64 md:h-80"></div>
    </section>
  );
};

export default LocationSection;
