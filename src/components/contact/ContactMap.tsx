
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';

// Tacoma address coordinates
const BUSINESS_LOCATION = {
  lng: -122.445564,
  lat: 47.249069,
  address: "Tacoma, WA 98445"
};

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");

  // Function to initialize the map after we have the token
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;
    
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [BUSINESS_LOCATION.lng, BUSINESS_LOCATION.lat],
      zoom: 14,
      interactive: true,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    // Add marker for our location
    marker.current = new mapboxgl.Marker({ color: '#FF0000' })
      .setLngLat([BUSINESS_LOCATION.lng, BUSINESS_LOCATION.lat])
      .addTo(map.current);
      
    // Add popup with address
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setLngLat([BUSINESS_LOCATION.lng, BUSINESS_LOCATION.lat])
      .setHTML(`<h3 class="text-base font-bold">LiftNHaul Movers</h3><p>${BUSINESS_LOCATION.address}</p>`)
      .addTo(map.current);
    
    marker.current.setPopup(popup);
  };

  // Handle map token input
  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('mapboxToken') as string;
    
    if (token) {
      setMapboxToken(token);
      localStorage.setItem('mapbox_token', token);
    }
  };

  // Check for token in localStorage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  // Initialize map when token is available
  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
    
    // Cleanup function to remove map on unmount
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <Card className="p-6 bg-muted/30">
        <h3 className="text-lg font-semibold mb-4">Enter Mapbox Access Token</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          To view our location on the map, please enter a Mapbox access token. 
          You can get a free token at <a href="https://www.mapbox.com/signup/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>.
        </p>
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <input 
            type="text" 
            name="mapboxToken" 
            placeholder="Enter your Mapbox access token"
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md">
            Load Map
          </button>
        </form>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden">
      <div className="relative w-full h-[400px] rounded-md overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
      <div className="p-4 bg-secondary/50">
        <h3 className="font-semibold">Find Us</h3>
        <p className="text-sm text-muted-foreground">{BUSINESS_LOCATION.address}</p>
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS_LOCATION.lat},${BUSINESS_LOCATION.lng}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary text-sm hover:underline mt-1 inline-block"
        >
          Get Directions
        </a>
      </div>
    </Card>
  );
};

export default ContactMap;
