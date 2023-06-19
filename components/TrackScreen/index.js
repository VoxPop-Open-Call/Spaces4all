import { useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import { Container, Map, Checkpoint, Path, Header, Distance } from "./styledTrackScreen";
import MapViewDirections from "react-native-maps-directions";
import { LocationContext } from '../../Context/Location';
import { color, localeTexts } from "../../global";
import { REACT_APP_API_KEY } from '@env';
import { Icon } from "@rneui/base";
import InfoBar from "../InfoBar";
import { TTSButton } from "../TTSButton";
import { PROVIDER_GOOGLE } from "react-native-maps"


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
                    localeTexts['sure'],
                    localeTexts['leaving'],
                    [
                        { text: localeTexts['cancel'], style: 'cancel', onPress: () => { } },
                        {
                            text: localeTexts['exit'],
                            style: 'destructive',
                            // If the user confirmed, then we dispatch the action we blocked earlier
                            // This will continue the action that had triggered the removal of the screen
                            onPress: () => navigation.navigate('TrackEndScreen'),
                        },
                    ]
                );
            }),
        [navigation]
    ), [];

    // Location
    const checkpoints = route.params.checkpoints
    const corners = route.params.corners
    const optionalCheckpoints = route.params.optionalCheckpoints
    const locationContext = useContext(LocationContext);
    const [region, setRegion] = useState({
        latitude: checkpoints[0].latitude,
        longitude: checkpoints[0].longitude,
        latitudeDelta: 0,
        longitudeDelta: 0.0121,
    });
    const [userLocation, setUserLocation] = useState(locationContext.userLocation.coords);
    const [distance, setDistance] = useState(0);
    const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
    const [currentCorner, setCurrentCorner] = useState(0);

    // detect proximity to current checkpoint 
    useEffect(() => {
        if (getDistance(userLocation, checkpoints[currentCheckpoint]) < 15 && checkpoints.length !== currentCheckpoint + 1) {
            setCurrentCheckpoint(currentCheckpoint + 1);
        }
    }, [distance]);

    useEffect(() => {
        console.log(corners[currentCorner])
    }, [currentCorner]);


    // detect proximity to current corner 
    useEffect(() => {
        // Checks if the course has begun or is near the end

        if (currentCheckpoint === 0) {
            return;
        }
        if (corners.length === currentCorner + 1) {
            navigation.navigate('TrackEndScreen')
            return;
        }

        let currentDistance = getDistance(userLocation, corners[currentCorner + 1]); // Checks distance until the next corner
        if (currentDistance < 10) {
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

    //turn off location updater 

    useEffect(() => {
        if (locationContext.updateLocation) {
            locationContext.toggleLocationUpdate();
        }
    }, []);

    function animateToRegion() {
        this.map.animateToRegion(region, 500);
    }

    return (
        <Container
            accessible={false}
            accessibilityRole="none"
        >

            <Header style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
                accessible={true}
            >
                <Icon accessibilityRole="button" accessibilityHint={localeTexts["ariaButtonClose"]} type="Io" name="close" size={48} color={color.onPrimaryContainer} onPress={() => navigation.goBack()} />
                <Distance accessibilityRole="none" accessibilityHint={localeTexts["ariaLabelDistance"]}>
                    {distance >= 1000 ? (distance / 1000) + ' km' : Math.round(distance) + ' m'}
                </Distance>
            </Header>

            <Map
                provider={PROVIDER_GOOGLE}
                ref={ref => this.map = ref}
                accessibilityElementsHidden={true}
                importantForAccessibility="no-hide-descendants"
                showsUserLocation={true}
                followsUserLocation={true}
                showsMyLocationButton={false}
                initialRegion={region}
                minZoomLevel={18.5}
                maxZoomLevel={20}
                loadingEnabled={true}
                onUserLocationChange={
                    (newLocation) => {
                        if (getDistance(userLocation, newLocation.nativeEvent.coordinate) > 2) {
                            // Avoiding constant location updates with a movement distance threshold 
                            setRegion(
                                {
                                    ...region,
                                    latitude: newLocation.nativeEvent.coordinate.latitude,
                                    longitude: newLocation.nativeEvent.coordinate.longitude
                                }
                            )
                            setUserLocation(newLocation.nativeEvent.coordinate);
                            animateToRegion();
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
                    zIndex={2}
                />

                {optionalCheckpoints.map((checkpoint, i) => (
                    <Checkpoint
                        key={i}
                        coordinate={checkpoint}
                        title={checkpoint.title}
                        description={checkpoint.description}
                        pinColor={'yellow'}
                        opacity={0.7}
                        zIndex={3}
                    />
                ))
                }
                {(currentCheckpoint === 0) ? // Using googles automatic directions
                    <MapViewDirections
                        origin={userLocation}
                        destination={checkpoints[currentCheckpoint]}
                        apikey={REACT_APP_API_KEY}
                        mode={'WALKING'}
                        strokeWidth={4}
                        strokeColor={color.primary}
                        precision="high"
                        onReady={(ready) => {
                            setDistance(ready.distance * 1000); // Setting distance if the user is outside the track
                        }}
                        resetOnChange={false}
                        zIndex={3}
                    />
                    :
                    <Path // Using manual directions, it only displays half the track to avoid confusion

                        coordinates={corners.slice(currentCorner).length > Math.floor(corners.length / 2) ? corners.slice(currentCorner, currentCorner + Math.floor(corners.length / 2)) : corners.slice(currentCorner)}
                        strokeWidth={4}
                        strokeColor={color.primary}
                        zIndex={2}
                    />

                }
                <Path // path background

                    coordinates={corners}
                    strokeWidth={8}
                    strokeColor={color.background}
                    opacity={0.2}
                    zIndex={1}
                />
            </Map>
            <TTSButton />
            <InfoBar
                checkpoint={checkpoints[currentCheckpoint === 0 ? 0 : currentCheckpoint - 1]} // Sends data from the previous checkpoint
                trackStarted={currentCheckpoint !== 0}
                corner={corners[currentCorner]}
            />
        </Container>
    )
}