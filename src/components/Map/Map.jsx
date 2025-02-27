// import React, { useRef, useEffect, useState } from 'react'
// import './Map.css'

// import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css';

  
// const token = process.env.REACT_APP_MAPBOX_PK

// const Map = () => {

//   const mapRef = useRef()  
//   const mapContainerRef = useRef()
//   const markerRef = useRef();

//   const [center, setCenter] = useState([10.5157, 43.8430])
//   const [zoom, setZoom] = useState(10.2)


//   useEffect(() => {
//     if (!mapContainerRef.current || mapRef.current) return; //prevent duplicate maps
    
//     mapboxgl.accessToken = token;

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       center: center,
//       zoom: zoom,
//     });

//     // mapRef.current.on('move', () => {
//     //   const mapCenter = mapRef.current.getCenter()
//     //   const mapZoom = mapRef.current.getZoom()

//     //   setCenter([mapCenter.lng, mapCenter.lat])
//     //   setZoom(mapZoom)
//     // })

//     const popup = new mapboxgl.Popup({ offset: 25 }).setText('Arancera di Villa Grabau');

//     new mapboxgl.Marker(markerRef.current)
//     .setLngLat([10.552148755822415, 43.90058140404499])
//     .setPopup(popup)
//     .addTo(mapRef.current)


//     return () => {
//       mapRef.current.remove();
//     }
//   }, [])

//   return ( 
//   <>

//       <div id="map-container" ref={mapContainerRef}/>
//   </>

//   )
// }

// export default Map


import React, { useRef, useEffect } from "react";
import "./Map.css";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const token = process.env.REACT_APP_MAPBOX_PK;

const Map = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {

    if (!mapContainerRef.current) {
      console.log("🚨 Map container is missing or already initialized.");
      return;
    }
  
    mapboxgl.accessToken = token;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12", 
      center: [10.5157, 43.843],
      zoom: 10.2,
    });

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Arancera di Villa Grabau"
    );

    new mapboxgl.Marker()
      .setLngLat([10.552148755822415, 43.90058140404499])
      .setPopup(popup)
      .addTo(mapRef.current);

  
    return () => {
      if (mapRef.current) {
        console.log("🛑 Removing map...");
        mapRef.current.remove(); // clean up on unmount
      }
    };
  }, []); // Run only once

  return <div id="map-container" ref={mapContainerRef} />;
};

export default Map;