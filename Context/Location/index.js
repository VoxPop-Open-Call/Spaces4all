import { createContext } from 'react'
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';
import { REACT_APP_API_KEY } from '@env';
import { localeTexts } from '../../global';

const LocationContext = createContext(undefined)

function LocationProvider({ children }) {

    // Getting mathematical distance between two points 

    function getRawDistance(origin, destination) {
        //Calculates distance (without accounting for roads) in m
        const deg2rad = (deg) => deg * (Math.PI / 180);
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(destination.latitude - origin.latitude); // deg2rad below
        var dLon = deg2rad(destination.longitude - origin.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(destination.latitude)) * Math.cos(deg2rad(origin.latitude)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c) * 1000; // Distance in m
        return d;
    }

    // provide function to get current user location

    const [userLocation, setUserLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getLocation() {

        // Because of setInterval we must update and reassign errorMsg, essentially prevErrorMsg === errorMsg
        let isAlertOpen = false
        setErrorMsg((prevErrorMsg) => {
            isAlertOpen = prevErrorMsg !== null
            return prevErrorMsg
        })
        if (isAlertOpen) {
            return
        }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            Alert.alert(
                localeTexts['gpsLocation'],
                localeTexts['allowLocation'],
                [
                    {
                        text: localeTexts['option'],
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
        // Update location if the user location has move significantly
        // Because of setInterval we must update and reassign userLocation, essentially prevLocation === userLocation
        setUserLocation((prevLocation) => {
            if (prevLocation === null || getRawDistance(prevLocation.coords, location.coords) > 15) {
                return location
            }
            return prevLocation
        });
        setErrorMsg(null);
    };

    // provide function to get distance between user and given location using the google maps API


    // function getDistance(latitude, longitude) {
    //     if (userLocation === null) {
    //         return
    //     };
    //     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation.coords.latitude},${userLocation.coords.longitude}&destinations=${latitude},${longitude}&key=${REACT_APP_API_KEY}`;
    //     axios
    //         .get(url)
    //         .then(r => {
    //             setUserDistance(r.data.rows[0].elements[0].distance);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    //     return (userDistance);
    // }

    const [userDistance, setUserDistance] = useState(null);
    function getDistance(latitude, longitude) {
        if (userLocation === null) {
            return
        };
        let rawDistance = getRawDistance({ latitude: latitude, longitude: longitude }, userLocation.coords)
        setUserDistance(rawDistance);
        return {
            value: rawDistance,
            text: rawDistance >= 1000 ? (rawDistance / 1000).toFixed(2) + ' km' : Math.round(rawDistance) + ' m'
        };
    }


    // Periodically update location 
    const [updateLocation, setUpdateLocation] = useState(true);
    useEffect(() => {
        console.log(updateLocation)
        if (!updateLocation) {
            return
        }
        if (userLocation === null) {
            getLocation();
        }
        const interval = setInterval(() => {
            getLocation();
            console.log("reload");
        }, 3000);
        return () => clearInterval(interval);
    }, [updateLocation]);

    function toggleLocationUpdate() {
        setUpdateLocation(!updateLocation)
    }


    return (
        <LocationContext.Provider value={
            {
                getLocation: getLocation,
                userLocation: userLocation,
                getDistance: getDistance,
                userDistance: userDistance,
                errorMsg: errorMsg,
                toggleLocationUpdate: toggleLocationUpdate,
                updateLocation: updateLocation
            }
        }>
            {children}
        </LocationContext.Provider>
    )
}

export { LocationContext, LocationProvider }