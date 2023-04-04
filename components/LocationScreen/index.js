import { ListItem } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Label, DescriptionTitle, DescriptionBody, DescriptionBodyItem } from './styledLocation';
import { color } from '../../global';
import TrackList from '../TrackList';
import OpenCard from '../OpenCard';


export default function LocationScreen({ navigation, route }) {
    const [expanded, setExpanded] = useState(false);

    const header = route.params.header
    const body = route.params.body
    const tracks = route.params.tracks

    return (
        <ScrollView style={{ backgroundColor: "#D9CBEF" }}>
            <OpenCard header={header} tracksLength={Object.keys(tracks).length} />
            <ListItem.Accordion
                isExpanded={expanded} topDivider containerStyle={{ backgroundColor: color.primaryContainer }}
                content={
                    <ListItem.Content><ListItem.Title><Label>
                        Mais Informações
                    </Label></ListItem.Title></ListItem.Content>
                }
                onPress={() => { setExpanded(!expanded); }}
            >
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
            <TrackList tracks={tracks} />
        </ScrollView>
    );
}