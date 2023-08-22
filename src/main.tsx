import React from 'react'
import ReactDOM from 'react-dom/client'

import { MapsApp } from './MapsApp.tsx'

import mapboxgl from 'mapbox-gl'// or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaHVndWljaHUiLCJhIjoiY2xmbnhuN25nMHFkdzNzbXZxbDV4anRkbCJ9.M88ulvz04sFZXRY-sLruzw';


if ( !navigator.geolocation ) {
  alert('Geolocation is not supported by your browser')
  throw new Error('Geolocation is not supported by your browser')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
