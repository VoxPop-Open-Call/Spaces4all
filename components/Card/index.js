import { ActivityIndicator } from "react-native";
import { Image, Icon } from '@rneui/themed';
import { StyledCard, Title, CardBody, CardRow, CardInfo, Info } from "./styledCard";
import { color } from "../../global";
import { GetDistance } from '../GetDistance';


const Card = ({ name, image, lat, lon, openingTime, closingTime, trackCount, navigation, location, userLocation }) => {



    return (
        <StyledCard onPress={() => navigation.navigate('Location', { location: location, userLocation: userLocation })}>
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
                    <Icon type="material" name="location-pin" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                    <Info><GetDistance userLocation={userLocation} lat={lat} lon={lon} /></Info>
                </CardRow>
                <CardRow>
                    <CardInfo>
                        <Icon type="material" name="flag" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                        <Info>{trackCount}</Info>
                    </CardInfo>
                    <CardInfo>
                        <Icon type="material" name="schedule" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                        <Info>{openingTime === closingTime ? "Aberto 24 horas" : openingTime + " - " + closingTime}</Info>
                    </CardInfo>
                </CardRow>
            </CardBody>

        </StyledCard>
    )
};

export { Card }
