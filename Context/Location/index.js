import { createContext } from 'react'
import { useState } from 'react';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';
import { REACT_APP_API_KEY } from '@env';
import axios from 'axios';

const LocationContext = createContext(undefined)

function LocationProvider({ children }) {

    // provide function to get current user location

    const [userLocation, setUserLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getLocation() {
        if (errorMsg != null) {
            return;
        }
        let { status } = await Location.requestBackgroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            Alert.alert(
                'Localizção',
                'A App precisa da vossa localização para funcionar, pedimos que active a Localização por GPS e permita a App nas configurações.',
                [
                    {
                        text: 'Opções',
                        style: 'destructive',
                        onPress: () => {
                            setErrorMsg(null);
                            Linking.openSettings();
                        },
                    },
                ]
            );
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);
        setErrorMsg(null);

    };

    // provide function to get distance between user and given location

    const [userDistance, setUserDistance] = useState(null);

    function getDistance(latitude, longitude) {
        if (userLocation === null) {
            return
        };
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation.coords.latitude},${userLocation.coords.longitude}&destinations=${latitude},${longitude}&key=${REACT_APP_API_KEY}`;
        axios
            .get(url)
            .then(r => {
                setUserDistance(r.data.rows[0].elements[0].distance);
            })
            .catch(err => {
                console.error(err);
            });
        return (userDistance);
    }

    return (
        <LocationContext.Provider value={
            {
                getLocation: getLocation,
                userLocation: userLocation,
                getDistance: getDistance,
                userDistance: userDistance,
                errorMsg: errorMsg
            }
        }>
            {children}
        </LocationContext.Provider>
    )
}

export { LocationContext, LocationProvider }