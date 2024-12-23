import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useCallback, useMemo } from "react";

const Map = () => {
  // Tacoma, WA coordinates
  const center = useMemo(() => ({ lat: 47.2529, lng: -122.4443 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || "",
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, [center]);

  if (!isLoaded) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={center}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      onLoad={onLoad}
    >
      <MarkerF
        position={center}
        title="Lift n' Haul"
      />
    </GoogleMap>
  );
};

export default Map;