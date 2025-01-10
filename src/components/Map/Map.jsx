import React, { useRef, useEffect, useState } from 'react'
import './Map.css'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

  
const token = process.env.REACT_APP_MAPBOX_PK

const Map = () => {

  const mapRef = useRef()  
  const mapContainerRef = useRef()
  const markerRef = useRef();

  const [center, setCenter] = useState([10.5157, 43.8430])
  const [zoom, setZoom] = useState(10.2)


  useEffect(() => {
    mapboxgl.accessToken = token;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
    });

    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()

      setCenter([mapCenter.lng, mapCenter.lat])
      setZoom(mapZoom)
    })

    const popup = new mapboxgl.Popup({ offset: 25 }).setText('Arancera di Villa Grabau');

    new mapboxgl.Marker(markerRef.current)
    .setLngLat([10.552148755822415, 43.90058140404499])
    .setPopup(popup)
    .addTo(mapRef.current)


    return () => {
      mapRef.current.remove()
    }
  }, [center, zoom])

  return ( 
  <>
        {/* <div
        ref={markerRef}
        style={{
          backgroundImage:"url('../../../../public/assets/arancera-villa-grabau.jpg')",
          backgroundSize: 'cover',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      ></div> */}
      <div id="map-container" ref={mapContainerRef}/>
  </>

  )
}

export default Map