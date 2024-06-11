"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Direction from "../components/direcection";
import '../styles/global.css'

const MagazinDirectionPage = () => {
  const searchParams = useSearchParams();
  const pos = searchParams.get("pos");
  console.log(pos);

  const [origin, setOrigin] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setOrigin({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting geolocation", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  if (loading || !pos) {
    return <div>Loading...</div>;
  }

  const [lat, lng] = pos.split(',').map(Number);

  return (
    <div className="scroll-container">
      <div className="direction-container">
        <Direction
          origin={origin}
          //@ts-ignore
          destination={{ lat, lng }}
        />
      </div>
      <div className="content-container">
        {/* Add any other content here */}
      </div>
    </div>
  );
};

export default MagazinDirectionPage;
