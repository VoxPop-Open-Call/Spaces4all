import { useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import { Container, Map, Checkpoint, Path, Header, Distance } from "./styledTrackScreen";
import MapViewDirections from "react-native-maps-directions";
import { LocationContext } from '../../Context/Location';
import { color } from "../../global";
import { REACT_APP_API_KEY } from '@env';
import { Icon } from "@rneui/base";
import InfoBar from "../InfoBar";
import { TTSButton } from "../TTSButton";

// On deploy steps on https://docs.expo.dev/versions/latest/sdk/map-view/ must be taken


function getDistance(origin, destination) {
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

export default function TrackScreen({ navigation, route }) {

    // Back action check and alert
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
                // Prompt the user before leaving the screen
                Alert.alert(
                    'Tem certeza?',
                    'Caso saia agora terá de recomeçar o percurso do início.',
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

    // Location
    const checkpoints = route.params.checkpoints
    const corners = route.params.corners
    const optionalCheckpoints = route.params.optionalCheckpoints
    const locationContext = useContext(LocationContext);
    const [region, setRegion] = useState({
        latitude: checkpoints[0].latitude,
        longitude: checkpoints[0].longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [userLocation, setUserLocation] = useState(locationContext.userLocation);
    const [distance, setDistance] = useState(0);
    const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
    const [currentCorner, setCurrentCorner] = useState(0);
    // attempt to set initial gps location
    useEffect(() => {

        locationContext.getLocation();
        if (locationContext.errorMsg !== null) {
            navigation.navigate('TrackEndScreen')
        }
        setUserLocation(locationContext.userLocation.coords);
    }, []);

    // detect proximity to current checkpoint 
    useEffect(() => {
        if (getDistance(userLocation, checkpoints[currentCheckpoint]) < 35) {
            // Checkpoint reached
            if (checkpoints.length === currentCheckpoint + 1) {
                // It was the last checkpoint, end track
                // TODO: Track completion screen
                navigation.navigate('TrackEndScreen')
                return;
            }
            // More checkpoints ahead, change text
            setCurrentCheckpoint(currentCheckpoint + 1);
        }
    }, [distance]);

    // detect proximity to current corner 
    useEffect(() => {
        if (currentCheckpoint === 0 || currentCorner.length === currentCorner + 1) { // Checks if the course has begun or is near the end
            return;
        }
        let currentDistance = getDistance(userLocation, corners[currentCorner + 1]); // Checks distance until the next corner
        if (currentDistance < 25) {
            setCurrentCorner(currentCorner + 1); // corner reached
        }
        if (currentDistance > 75) {  // corner too far, checks for the nearest corner
            let lowestDistance = currentDistance;
            let bestCheckpoint = 0;
            for (let i = 0; i < corners.slice(currentCorner).length - 1; i++) {
                let iDistance = getDistance(userLocation, corners.slice(currentCorner)[i])
                if (iDistance > currentDistance) {
                    continue;
                }
                if (iDistance < lowestDistance) {
                    lowestDistance = iDistance;
                    bestCheckpoint = i;
                }
            }
            setCurrentCorner(currentCorner + bestCheckpoint);
        }
    }, [distance]);

    return (
        <Container>

            <Header style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <Icon type="Io" name="close" size={48} color={color.onPrimaryContainer} onPress={() => navigation.goBack()} />
                <Distance>
                    {distance >= 1000 ? (distance / 1000) + ' km' : Math.round(distance) + ' m'}
                </Distance>
            </Header>

            <Map
                followsUserLocation
                initialRegion={region}
                showsUserLocation
                minZoomLevel={16.5}
                maxZoomLevel={20}
                loadingEnabled={true}
                onUserLocationChange={
                    (newLocation) => {
                        if (getDistance(userLocation, newLocation.nativeEvent.coordinate) > 15) {
                            setUserLocation(newLocation.nativeEvent.coordinate); // Avoiding constant location updates with a movement distance threshold 
                        }
                        if (currentCheckpoint !== 0) {
                            setDistance(getDistance(userLocation, checkpoints[currentCheckpoint])); // Setting distance if the user is inside the track
                        }
                    }
                }
            >
                <Checkpoint
                    coordinate={checkpoints[currentCheckpoint]}
                    title={checkpoints[currentCheckpoint].title}
                    description={checkpoints[currentCheckpoint].description}
                    opacity={0.7}
                />

                {optionalCheckpoints.map((checkpoint, i) => (
                    <Checkpoint
                        key={i}
                        coordinate={checkpoint}
                        title={checkpoint.title}
                        description={checkpoint.description}
                        pinColor={'yellow'}
                        opacity={0.7}
                    />
                ))
                }
                {(currentCheckpoint === 0) ? // Using googles automatic directions
                    <MapViewDirections
                        origin={userLocation}
                        destination={checkpoints[currentCheckpoint]}
                        apikey={REACT_APP_API_KEY}
                        mode={'WALKING'}
                        strokeWidth={3}
                        strokeColor={color.primary}
                        precision="high"
                        onReady={(ready) => {
                            setDistance(ready.distance * 1000); // Setting distance if the user is outside the track
                        }}
                        resetOnChange={false}
                    />
                    :
                    <Path // Using manual directions
                        coordinates={corners.slice(currentCorner)}
                        strokeWidth={3}
                        strokeColor={color.primary}
                    />
                }
            </Map>
            <TTSButton />
            <InfoBar checkpoint={checkpoints[currentCheckpoint]} />
        </Container>
    )
}