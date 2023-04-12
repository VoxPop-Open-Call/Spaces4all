import { REACT_APP_API_KEY } from '@env';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { color } from '../../global';

const GetDistance = (props) => {

    if (props.userLocation === null || props.userLocation === undefined) {
        return (<ActivityIndicator color={color.primary} />);
    }
    const userLat = props.userLocation.coords.latitude
    const userLon = props.userLocation.coords.longitude
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLat},${userLon}&destinations=${props.lat},${props.lon}&key=${REACT_APP_API_KEY}`;

    const [error, setError] = useState(false);
    const [response, setResponse] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        setState('loading');
        axios
            .get(url)
            .then(r => {
                setState('success');
                setResponse(r);
            })
            .catch(err => {
                setState('error');
                setError(err);
            });

    }, []);
    if (state === 'error' || !response.data || state === 'loading') {
        return (<ActivityIndicator size="large" color="#00ff00" />);
    }

    return (<Text>{response.data.rows[0].elements[0].distance.text + ' de distancia'}</Text>);
}

export { GetDistance };