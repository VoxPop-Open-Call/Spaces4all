import * as Location from 'expo-location';
import { useIsFocused } from "@react-navigation/native";
import { data } from "../../data";
import { Container } from "./styledHomeScreen";
import { Card } from "../Card";
import { useState, useEffect, useCallback } from 'react';
import { RefreshControl, Text, Linking, Alert } from 'react-native';

export default function HomeScreen({ navigation, route }) {
    //Refresh
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    //Location



    const isFocused = useIsFocused();
    const [userLocation, setUserLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [reset, setReset] = useState(false)

    useEffect(() => {
        (async () => {
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
                                Linking.openSettings();
                                setReset(!reset)
                            },
                        },
                    ]
                );
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setUserLocation(location);
            setErrorMsg(null)
        })();
    }, [isFocused, refreshing]);
    // Location Updates whenever the user refreshed or changes tabs

    return (
        <Container refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>


            {data.map((location, i) => (
                <Card
                    key={i}
                    name={location.header.name}
                    image={location.header.image}
                    lat={location.header.lat}
                    lon={location.header.lon}
                    openingTime={location.header.openingTime}
                    closingTime={location.header.closingTime}
                    trackCount={Object.keys(location.tracks).length}
                    location={location}
                    navigation={navigation}
                    userLocation={userLocation}
                />
            ))}
        </Container>)
}