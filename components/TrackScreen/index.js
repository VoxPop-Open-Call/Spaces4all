import { View } from "react-native";
import { useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import { Container, Map, Checkpoint } from "./styledTrackScreen";
import MapViewDirections from "react-native-maps-directions";
import LocationContext from "../LocationContext";
import { color } from "../../global";
import { REACT_APP_API_KEY } from '@env';

// On deploy steps on https://docs.expo.dev/versions/latest/sdk/map-view/ must be taken

export default function TrackScreen({ navigation, route }) {

    const checkpoints = route.params.checkpoints

    // Back action check and alert
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
                // Prompt the user before leaving the screen
                Alert.alert(
                    'Tem certeza?',
                    'Caso saia agora tera que recomeçar a percurso do início.',
                    [
                        { text: "Cancelar", style: 'cancel', onPress: () => { } },
                        {
                            text: 'Sair',
                            style: 'destructive',
                            // If the user confirmed, then we dispatch the action we blocked earlier
                            // This will continue the action that had triggered the removal of the screen
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ]
                );
            }),
        [navigation]
    );

    //Location

    const locationContext = useContext(LocationContext);

    useEffect(() => {
        locationContext.getLocation()
        console.log(locationContext.errorMsg)
        if (locationContext.errorMsg !== null) {
            navigation.goBack()
        }
    }, []);


    const [region, setRegion] = useState({
        latitude: checkpoints[0].lat,
        longitude: checkpoints[0].lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });


    return (
        <Container>
            <Map
                initialRegion={region}
                showsUserLocation
                zoomEnabled={false}
                minZoomLevel={16}
                loadingEnabled={true}

            >
                {checkpoints.map((checkpoint, i) => (
                    <Checkpoint
                        key={i}
                        coordinate={{
                            latitude: checkpoint.lat,
                            longitude: checkpoint.lon
                        }}
                        title={checkpoint.title}
                        description={checkpoint.description}
                    />))
                }
                <MapViewDirections
                    origin={
                        {
                            latitude: locationContext.userLocation.coords.latitude,
                            longitude: locationContext.userLocation.coords.longitude
                        }
                    }
                    destination={
                        {
                            latitude: checkpoints[0].lat,
                            longitude: checkpoints[0].lon
                        }
                    }
                    apikey={REACT_APP_API_KEY}
                    mode={'WALKING'}
                    strokeWidth={3}
                    strokeColor={color.primary}
                />
            </Map>
        </Container>
    )
}