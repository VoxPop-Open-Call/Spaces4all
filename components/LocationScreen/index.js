import { ListItem } from '@rneui/themed';
import { useState, useCallback, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import { Label, DescriptionTitle, DescriptionBody, DescriptionBodyItem } from './styledLocation';
import { color } from '../../global';
import TrackList from '../TrackList';
import OpenCard from '../OpenCard';
import { LocationContext } from '../../Context/Location';


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

    useEffect(() => {
        locationContext.getLocation();
        locationContext.getDistance(header.latitude, header.longitude);
        if (locationContext.errorMsg !== null) {
            navigation.goBack()
        }
    }, [refreshing]);

    return (
        <ScrollView style={{ backgroundColor: "#D9CBEF" }}>
            {
                // header
            }
            <OpenCard header={header} userDistance={locationContext.userDistance} tracksLength={Object.keys(tracks).length} />
            {
                // More info accordion
            }
            <ListItem.Accordion
                isExpanded={expanded} topDivider containerStyle={{ backgroundColor: color.primaryContainer }}
                content={
                    <ListItem.Content><ListItem.Title><Label>
                        Mais Informações
                    </Label></ListItem.Title></ListItem.Content>
                }
                onPress={() => { setExpanded(!expanded); }}            >
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
            <TrackList tracks={tracks} navigation={navigation} userDistance={locationContext.userDistance} />
        </ScrollView>
    );
}