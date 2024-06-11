// "use client";

// import { useEffect, useState } from "react";
// import {
//   APIProvider,
//   Map,
//   useMapsLibrary,
//   useMap,
// } from "@vis.gl/react-google-maps";

// interface DirectionProps {
//   origin: { lat: number; lng: number };
//   destination: { lat: number; lng: number };
// }

// export default function Direction({ origin, destination }: DirectionProps) {
//   const position = { lat: 33.5722602, lng: -7.669393};

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
//         <Map
//           center={position}
//           zoom={9}
//           mapId={process.env.NEXT_PUBLIC_MAP_ID}
//           fullscreenControl={false}
//         >
//           <Directions origin={origin} destination={destination} />
//         </Map>
//       </APIProvider>
//     </div>
//   );
// }

// interface DirectionsProps {
//   origin: { lat: number; lng: number };
//   destination: { lat: number; lng: number };
// }

// function Directions({ origin, destination }: DirectionsProps) {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes");
//           //@ts-ignore
//   const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
//           //@ts-ignore
//   const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
//           //@ts-ignore
//   const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
//   const [routeIndex, setRouteIndex] = useState(0);
//   const selected = routes[routeIndex];
//   const leg = selected?.legs[0];

//   useEffect(() => {
//     if (!routesLibrary || !map) return;
//     setDirectionsService(new routesLibrary.DirectionsService());
//     setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
//   }, [routesLibrary, map]);

//   useEffect(() => {
//     if (!directionsService || !directionsRenderer) return;

//     directionsService
//       .route({
//         //@ts-ignore
//         origin: new google.maps.LatLng(origin.lat, origin.lng),
//                 //@ts-ignore

//         destination: new google.maps.LatLng(destination.lat, destination.lng),
//                 //@ts-ignore

//         travelMode: google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true,
//       })
//               //@ts-ignore

//       .then((response) => {
//         directionsRenderer.setDirections(response);
//         setRoutes(response.routes);
//       });

//     return () => directionsRenderer.setMap(null);
//   }, [directionsService, directionsRenderer, origin, destination]);

//   useEffect(() => {
//     if (!directionsRenderer) return;
//     directionsRenderer.setRouteIndex(routeIndex);
//   }, [routeIndex, directionsRenderer]);

//   if (!leg) return null;

//   return (
//     <div className="directions">
//       <h2>{selected.summary}</h2>
//       <p>
//         {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
//       </p>
//       <p>Distance: {leg.distance?.text}</p>
//       <p>Duration: {leg.duration?.text}</p>

//       <h2>Other Routes</h2>
//       <ul>
//         {routes.map((route, index) => (
//           <li key={route.summary}>
//             <button onClick={() => setRouteIndex(index)}>
//               {route.summary}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



"use client";

import { useEffect, useState, useRef } from "react";
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

interface DirectionProps {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
}

export default function Direction({ origin, destination }: DirectionProps) {
  const position = { lat: 33.5722602, lng: -7.669393 };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
        <Map
          center={position}
          zoom={9}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          fullscreenControl={false}
        >
          <Directions origin={origin} destination={destination} />
        </Map>
      </APIProvider>
    </div>
  );
}

interface DirectionsProps {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
}

function Directions({ origin, destination }: DirectionsProps) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  //@ts-ignore
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
  //@ts-ignore
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
  //@ts-ignore
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  //@ts-ignore
  const markerRef = useRef<google.maps.Marker | null>(null);

  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        //@ts-ignore
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        //@ts-ignore
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        //@ts-ignore
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      //@ts-ignore
      
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer, origin, destination]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);

    if (routes.length > 0) {
      animateMarker(routes[routeIndex]);
    }
  }, [routeIndex, directionsRenderer, routes]);
//@ts-ignore
  const animateMarker = (route: google.maps.DirectionsRoute) => {
    if (!map || !route) return;

    const steps = route.legs[0].steps;
    //@ts-ignore
    const path = steps.flatMap(step => step.path);
    let index = 0;

    if (!markerRef.current) {
        //@ts-ignore
      markerRef.current = new google.maps.Marker({
        position: path[0],
        map: map,
        icon: {
          url: "https://maps.google.com/mapfiles/kml/shapes/cabs.png",
          //@ts-ignore
          scaledSize: new google.maps.Size(32, 32),
        },
      });
    }

    const animate = () => {
      if (index < path.length) {
        markerRef.current?.setPosition(path[index]);
        index++;
        window.requestAnimationFrame(animate);
      }
    };

    animate();
  };

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
