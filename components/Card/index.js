import { Text, ActivityIndicator } from "react-native";
import { Image, Icon, Button } from '@rneui/themed';
import { StyledCard, Title, CardBody, CardRow, CardInfo } from "./styledCard";

const Card = ({ name, image, lat, lon, openingTime, closingTime, trackCount, navigation, location }) => (
    <StyledCard onPress={() => navigation.navigate('Location', location)}>
        <Image
            containerStyle={{
                aspectRatio: 2,
                width: '100%',
                flex: 1,
            }}
            source={{ uri: image }}
            PlaceholderContent={<ActivityIndicator />} />
        <CardBody>
            <Title>{name}</Title>

            <CardRow>
                <Icon type="material" name="location-pin" style={{ marginRight: 3 }} /><Text>{lat + " " + lon}</Text>
            </CardRow>
            <CardRow>
                <CardInfo>
                    <Icon type="material" name="flag" style={{ marginRight: 3 }} />
                    <Text>{trackCount}</Text>
                </CardInfo>
                <CardInfo>
                    <Icon type="material" name="schedule" style={{ marginRight: 3 }} />
                    <Text>{openingTime === closingTime ? "Aberto 24 horas" : openingTime + " - " + closingTime}</Text>
                </CardInfo>
            </CardRow>
        </CardBody>

    </StyledCard>
);

export { Card }
