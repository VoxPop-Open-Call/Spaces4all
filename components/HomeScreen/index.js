import { data } from "../../data";
import { Container } from "./styledHomeScreen";
import { Card } from "../Card";
import { useState, useCallback, useContext } from 'react';
import { RefreshControl } from 'react-native';


export default function HomeScreen({ navigation, route }) {
    //Refresh
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <Container refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            {data.map((location, i) => (
                <Card
                    key={i}
                    name={location.header.name}
                    image={location.header.image}
                    imageLabel={location.header.imageLabel}
                    latitude={location.header.latitude}
                    longitude={location.header.longitude}
                    openingTime={location.header.openingTime}
                    closingTime={location.header.closingTime}
                    trackCount={Object.keys(location.tracks).length}
                    location={location}
                    navigation={navigation}
                />
            ))}
        </Container>)
}