import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiaHVndWljaHUiLCJhIjoiY2xmbnhuN25nMHFkdzNzbXZxbDV4anRkbCJ9.M88ulvz04sFZXRY-sLruzw',
    }
})

export default searchApi;


