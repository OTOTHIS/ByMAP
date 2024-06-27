'use client'
import React, { useState, useEffect, useRef } from 'react';
            //@ts-ignore
import GoogleMapReact from '@vis.gl/react-google-maps';

const MapComponent = () => {
  //@ts-ignore
  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 40.748817, lng: -73.985428 });
   //@ts-ignore
  const [zoom, setZoom] = useState(14);
    //@ts-ignore
  const [path, setPath] = useState<Array<{ lat: number; lng: number }>>([]);
  //@ts-ignore
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
   //@ts-ignore
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);

  useEffect(() => {
    const fetchPath = () => {
      const waypoints = [
        { lat: 40.748817, lng: -73.985428 }, // Example: Start point
        { lat: 40.748941, lng: -73.986022 }, // Example: Waypoint
        { lat: 40.749825, lng: -73.987963 }  // Example: Destination
      ];

      const origin = waypoints[0];
      const destination = waypoints[waypoints.length - 1];
      const intermediateWaypoints = waypoints.slice(1, -1).map(waypoint => ({
          //@ts-ignore
        location: new google.maps.LatLng(waypoint.lat, waypoint.lng),
        stopover: true
      }));

      if (directionsServiceRef.current && directionsRendererRef.current) {
        directionsServiceRef.current.route(
          {
                        //@ts-ignore
            origin: new google.maps.LatLng( origin.lat, origin?.lng),
            //@ts-ignore
            destination: new google.maps.LatLng(destination.lat, destination?.lng),
            waypoints: intermediateWaypoints,
              //@ts-ignore
            travelMode: google.maps.TravelMode.DRIVING,
          },
            //@ts-ignore
          (result, status) => {
              //@ts-ignore
            if (status === google.maps.DirectionsStatus.OK) {
              directionsRendererRef.current?.setDirections(result);
            } else {
              console.error(`Error fetching directions: ${status}`);
            }
          }
        );
      }
    };

    fetchPath();

    const intervalId = setInterval(fetchPath, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
  //@ts-ignore
  const handleApiLoaded = ({ map, maps }: { map: google.maps.Map; maps: typeof google.maps }) => {
    directionsServiceRef.current = new maps.DirectionsService();
    directionsRendererRef.current = new maps.DirectionsRenderer();
    directionsRendererRef.current.setMap(map);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {
          //@ts-ignore
          <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleApiLoaded}
        />
      }
   
    </div>
  );
};

export default MapComponent;
