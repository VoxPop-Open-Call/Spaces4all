import { Background, Container, Stars, SubTitle, Title } from "./StyledTrackEndScreen";
import { Icon, Button } from "@rneui/base";
import { color, locale, localeTexts } from "../../global";
import { useState, useEffect, useContext } from "react";
import { PreferencesContext } from "../../Context/Preferences";
import * as Speech from 'expo-speech';

export default function TrackEndScreen({ navigation }) {
    // Back button handle
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
                // Sends user back home without feedback
                navigation.navigate('Home')
            }),
        [navigation]
    ), [];

    // TTS
    const preferences = useContext(PreferencesContext)
    useEffect(() => {
        if (preferences.TTS) {
            Speech.stop();
            Speech.speak(localeTexts['trackfinished'], { language: locale });
        }

    }, []);

    const [starCount, setStarCount] = useState(-1);

    return (
        <Background>
            <Container>
                <Title>
                    {localeTexts['trackfinished']}
                </Title>
                <SubTitle>
                    {localeTexts['whatdiduthink']}
                </SubTitle>
                <Stars>
                    {
                        [...Array(5).keys()]
                            .map((i) =>
                                <Icon
                                    key={i}
                                    type="material"
                                    name="star"
                                    size={50}
                                    color={
                                        starCount >= i ? color.primaryContainer : color.onPrimaryContainer}
                                    onPress={
                                        () => {
                                            setStarCount(i)
                                        }
                                    } />
                            )
                    }
                </Stars>
                <Button
                    title={localeTexts['send']}
                    titleStyle={{
                        color: color.onPrimaryContainer
                    }}
                    buttonStyle={{
                        backgroundColor: color.primaryContainer
                    }}
                    containerStyle={{
                        width: 250,
                    }}
                    onPress={
                        () => {
                            navigation.navigate('Home')
                            //TODO: Add feedback send 
                        }
                    }
                    disabled={starCount < 0}
                    raised={true}
                />
            </Container>
        </Background>
    )
}