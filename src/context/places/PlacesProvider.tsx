import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [ number, number ];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }:Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE );

    useEffect(() => {
       getUserLocation()
        .then( lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }) )
    }, []);

    const searchPlacesByTerm = async( query: string ) => {
        if ( query.length === 0 ) return []; //TODO: limpiar state
        if ( !state.userLocation ) throw new Error('No se ha podido obtener la ubicación del usuario');
        
        const resp = await searchApi.get(`/${ query }.json`, {
            params: {
                proximity: state.userLocation.join(','), // lng,lat
            }   
        });

        console.log(resp.data);

        return resp.data;
    }

    return (
        <PlacesContext.Provider value={{
            ...state,

            // Methods
            searchPlacesByTerm
        }}>
            { children }
        </PlacesContext.Provider>
    )
}
