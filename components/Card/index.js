import { ActivityIndicator } from "react-native";
import { Image, Icon } from "@rneui/themed";
import { StyledCard, Title, CardBody, CardRow, CardInfo, Info } from "./styledCard";
import { color, localeTexts } from "../../global";
import { GetDistance } from "../GetDistance";


const Card = ({ name, image, imageLabel, latitude, longitude, openingTime, closingTime, trackCount, navigation, location }) => {

    return (
        <StyledCard
            onPress={() => navigation.navigate("Location", { location: location })}
            accessibilityRole="imagebutton"
            accessibilityHint={localeTexts["ariaCard"]}
        >
            <Image
                containerStyle={{
                    aspectRatio: 2,
                    width: "100%",
                    flex: 1,
                }}
                source={{ uri: image }}
                PlaceholderContent={<ActivityIndicator />}
                accessibilityLabel={imageLabel}
            />

            <CardBody >
                <Title>{name}</Title>

                <CardRow>
                    <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconDistance"]} type="material" name="location-pin" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                    <Info><GetDistance latitude={latitude} longitude={longitude} /></Info>
                </CardRow>
                <CardRow>
                    <CardInfo>
                        <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconTrackCount"]} type="material" name="flag" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                        <Info >{trackCount}</Info>
                    </CardInfo>
                    <CardInfo>
                        <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconOpeningTime"]} type="material" name="schedule" size={13} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                        <Info >{openingTime === closingTime ? localeTexts["open24hours"] : openingTime + " - " + closingTime}</Info>
                    </CardInfo>
                </CardRow>
            </CardBody>

        </StyledCard>
    )
};

export { Card }
