import { useEffect, useContext, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { color, localeTexts } from '../../global';
import { LocationContext } from '../../Context/Location';
import { useState } from 'react';
import { Info } from './styledGetDistance';


function GetDistance(props) {

    const locationContext = useContext(LocationContext);
    const [userDistance, setUserDistance] = useState(null);
    useEffect(() => {
        if (locationContext.userLocation === null || props.latitude === undefined) {
            return;
        }
        let distance = locationContext.getDistance(props.latitude, props.longitude)
        setUserDistance(distance)

    }, [locationContext.userLocation]);

    return (<Info>{userDistance === null || userDistance === undefined || userDistance === NaN ? <ActivityIndicator color={color.primary} /> : userDistance.text + localeTexts['fromDistance']}</Info>);
}

export { GetDistance };