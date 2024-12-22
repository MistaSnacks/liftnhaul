import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-122.4443, 47.2529], // Tacoma coordinates
        zoom: 11
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for Tacoma
      new mapboxgl.Marker()
        .setLngLat([-122.4443, 47.2529])
        .addTo(map.current);

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="p-4 border rounded-lg">
        <p className="mb-4 text-sm text-gray-600">
          Please enter your Mapbox public token to view the map. You can get one at{' '}
          <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Mapbox token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button onClick={initializeMap}>Initialize Map</Button>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="h-full w-full" />
  );
};

export default Map;