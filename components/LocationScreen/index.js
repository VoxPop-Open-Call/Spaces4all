import { Image, ListItem, Icon, Text } from '@rneui/themed';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';
import { Card, Title, Label, CardBody, CardRow, CardInfo } from './styledLocation';
import { color } from '../global';


export default function LocationScreen({ navigation, route }) {
    const [expanded, setExpanded] = useState(false);

    const header = route.params.header
    const body = route.params.body
    const id = route.params.id
    const tracks = route.params.tracks
    return (
        <ScrollView>
            <Card>
                <Image
                    containerStyle={{
                        aspectRatio: 1,
                        width: '100%',
                        flex: 0,
                    }}
                    source={{ uri: header.image }}
                    PlaceholderContent={<ActivityIndicator />} />
                <CardBody>
                    <Title>{header.name}</Title>

                    <CardRow>
                        <Icon type="material" name="location-pin" style={{ marginRight: 3 }} /><Text>{header.lat + " " + header.lon}</Text>
                    </CardRow>
                    <CardRow>
                        <CardInfo>
                            <Icon type="material" name="flag" style={{ marginRight: 3 }} />
                            <Text>{Object.keys(tracks).length}</Text>
                        </CardInfo>
                        <CardInfo>
                            <Icon type="material" name="schedule" style={{ marginRight: 3 }} />
                            <Text>{header.openingTime === header.closingTime ? "Aberto 24 horas" : header.openingTime + " - " + header.closingTime}</Text>
                        </CardInfo>
                    </CardRow>
                </CardBody>

            </Card>


            <ListItem.Accordion
                isExpanded={expanded} bottomDivider topDivider containerStyle={{ backgroundColor: color.primaryContainer }}
                content={
                    <ListItem.Content><ListItem.Title><Label>
                        Descrição
                    </Label></ListItem.Title></ListItem.Content>
                }
                onPress={() => { setExpanded(!expanded); }}

            >
                {
                    <ListItem containerStyle={{ backgroundColor: color.primaryContainer }}>
                        <ListItem.Content >
                            <ListItem.Title>{header.name}</ListItem.Title>
                            <ListItem.Subtitle>{body.description}</ListItem.Subtitle>
                        </ListItem.Content>

                        <ListItem.Chevron />
                    </ListItem>
                }
            </ListItem.Accordion>


        </ScrollView>
    );
}