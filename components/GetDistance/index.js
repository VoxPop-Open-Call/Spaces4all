import { useEffect, useContext, useCallback } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { color } from '../../global';
import { LocationContext } from '../../Context/Location';
import { useState } from 'react';
import axios from 'axios';
import { REACT_APP_API_KEY } from '@env';

const GetDistance = (props) => {

    const locationContext = useContext(LocationContext);
    const [userDistance, setUserDistance] = useState(null);
    const [refreshing, setRefreshing] = useState(null);

    useEffect(() => {
        locationContext.getLocation()
        if (locationContext.userLocation === null) {
            setRefreshing(true);
            setTimeout(() => {
                setRefreshing(false);
            }, 1000);
        } else {
            const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${locationContext.userLocation.coords.latitude},${locationContext.userLocation.coords.longitude}&destinations=${props.latitude},${props.longitude}&key=${REACT_APP_API_KEY}`;
            axios
                .get(url)
                .then(r => {
                    setUserDistance(r.data.rows[0].elements[0].distance);
                })
                .catch(err => {
                    console.error(err);
                });
        }

    }, [refreshing]);

    return (<Text>{userDistance === null || userDistance === undefined ? <ActivityIndicator color={color.primary} /> : userDistance.text + " de distancia."}</Text>);
}

export { GetDistance };