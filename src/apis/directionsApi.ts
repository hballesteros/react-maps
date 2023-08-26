import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiaHVndWljaHUiLCJhIjoiY2xmbnhuN25nMHFkdzNzbXZxbDV4anRkbCJ9.M88ulvz04sFZXRY-sLruzw',
    }
})


export default directionsApi;


