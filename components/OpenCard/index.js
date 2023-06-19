import { color, localeTexts } from "../../global";
import { Card, Title, Info, CardBody, CardRow, CardInfo } from "./styledOpenCard";
import { Image, Icon } from '@rneui/themed';
import { ActivityIndicator } from "react-native";


export default function OpenCard(props) {
    const header = props.header;
    return (
        <Card>
            <Image
                containerStyle={{
                    aspectRatio: 1,
                    width: '100%',
                    flex: 0,
                }}
                source={{ uri: header.image }}
                PlaceholderContent={<ActivityIndicator />}
                accessibilityLabel={header.imageLabel}
            />
            <CardBody>
                <Title>{header.name}</Title>

                <CardRow>
                    <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconDistance"]} type="material" name="location-pin" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                    <Info>{props.userDistance === null || props.userDistance === undefined || props.userDistance === undefined ? <ActivityIndicator color={color.primary} /> : props.userDistance.text + localeTexts['fromDistance']}</Info>
                </CardRow>
                <CardRow>
                    <CardInfo>
                        <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconTrackCount"]} type="material" name="map" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                        <Info >{props.tracksLength}</Info>
                    </CardInfo>
                    <CardInfo>
                        <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconOpeningTime"]} type="material" name="schedule" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                        <Info >{header.openingTime === header.closingTime ? localeTexts['open24hours'] : header.openingTime + " - " + header.closingTime}</Info>
                    </CardInfo>
                </CardRow>
            </CardBody>
        </Card>
    )
}