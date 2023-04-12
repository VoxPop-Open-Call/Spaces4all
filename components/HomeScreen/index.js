import { useIsFocused } from "@react-navigation/native";
import { data } from "../../data";
import { Container } from "./styledHomeScreen";
import { Card } from "../Card";
import { useState, useEffect, useCallback, useContext } from 'react';
import { RefreshControl } from 'react-native';
import LocationContext from '../LocationContext'

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

    const locationContext = useContext(LocationContext);
    const isFocused = useIsFocused();

    useEffect(() => {
        locationContext.getLocation()
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
                    userLocation={locationContext.userLocation}
                />
            ))}
        </Container>)
}