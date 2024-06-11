"use client";

import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useEffect, useState, useRef } from "react";
import { axiosClient } from "@/components/axios/axios";
import { BsPinMap } from "react-icons/bs";

// Fetch magazins data
const fetchMagazins = async () => {
  try {
    const response = await axiosClient.get('/public/Allmagazins');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function MagazinsMap() {
  const [magazins, setMagazins] = useState<Point[]>([]);

  useEffect(() => {
    const getMagazins = async () => {
      const data = await fetchMagazins();
      const formattedData = data.map((magazin: any) => ({
        lat: parseFloat(magazin.Latitude),
        lng: parseFloat(magazin.Longitude),
        key: magazin.id.toString(),
        name: magazin.name,
        image: magazin.image,
      }));
      setMagazins(formattedData);
    };

    getMagazins();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
        <Map
          center={{ lat: 34.020882, lng: -6.841650 }}
          zoom={10}
          mapId='ead9c30f6ce9e6'
        >
          <Markers points={magazins} />
        </Map>
      </APIProvider>
    </div>
  );
}
//@ts-ignore
type Point = google.maps.LatLngLiteral & {
  key: string;
  name: string;
  image: string;
};
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);
  const [activeMarker, setActiveMarker] = useState<Point | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    if (clusterer.current) {
      clusterer.current.clearMarkers();
      clusterer.current.addMarkers(Object.values(markers));
    }
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
          onClick={() => setActiveMarker(point)}
          onMouseOver={() => setActiveMarker(point)}
          onMouseOut={() => setActiveMarker(null)}
        >
          <span style={{ fontSize: "2rem" }}><BsPinMap className="text-red-500" /></span>
        </AdvancedMarker>
      ))}
      {activeMarker && (
        <InfoWindow
          position={activeMarker}
          onCloseClick={() => setActiveMarker(null)}
        >
          <div style={{ textAlign: "center" }}>
            <h3>{activeMarker.name}</h3>
            <img src={activeMarker.image} alt={activeMarker.name} style={{ width: "100px", height: "100px" }} />
          </div>
        </InfoWindow>
      )}
    </>
  );
};
