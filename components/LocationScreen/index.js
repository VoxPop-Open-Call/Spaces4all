import { ListItem } from '@rneui/themed';
import { useState, useCallback, useEffect, useContext } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { Label, DescriptionTitle, DescriptionBody, DescriptionBodyItem } from './styledLocation';
import { color, localeTexts } from '../../global';
import TrackList from '../TrackList';
import OpenCard from '../OpenCard';
import { LocationContext } from '../../Context/Location';
import { useIsFocused } from "@react-navigation/native";



export default function LocationScreen({ navigation, route }) {
    const [expanded, setExpanded] = useState(false);
    const header = route.params.location.header
    const body = route.params.location.body
    const tracks = route.params.location.tracks

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

    const [userDistance, setUserDistance] = useState(null)
    useEffect(() => {
        setUserDistance(locationContext.getDistance(header.latitude, header.longitude))
    }, [refreshing, locationContext.userLocation]);

    useEffect(() => {
        if (!locationContext.updateLocation) {
            locationContext.toggleLocationUpdate();
        }
    }, []);

    return (
        <ScrollView style={{ backgroundColor: "#D9CBEF" }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {
                // header
            }
            <OpenCard header={header} userDistance={userDistance} tracksLength={Object.keys(tracks).length} />
            {
                // More info accordion
            }
            <ListItem.Accordion
                isExpanded={expanded} topDivider containerStyle={{ backgroundColor: color.primaryContainer }}
                content={
                    <ListItem.Content><ListItem.Title><Label>
                        {localeTexts['moreInfo']}
                    </Label></ListItem.Title></ListItem.Content>
                }
                onPress={() => { setExpanded(!expanded); }}>
                <ListItem containerStyle={{ backgroundColor: color.primaryContainer, flexDirection: 'column' }}>
                    {body.map((content, i) =>
                        <ListItem.Content key={i}>
                            <DescriptionTitle>{content.title}</DescriptionTitle>
                            <DescriptionBody>
                                {content.data.map((dataContent, k) =>
                                    <DescriptionBodyItem key={k}>{dataContent}</DescriptionBodyItem>
                                )}
                            </DescriptionBody>
                        </ListItem.Content>
                    )}
                </ListItem>
            </ListItem.Accordion>
            {
                // Tracks
            }
            <TrackList tracks={tracks} navigation={navigation} userDistance={userDistance} googleMaps={route.params.location.header.googleMaps} />
        </ScrollView>
    );
}