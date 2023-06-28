import { Wrapper, Header, Title, Line, Body, Description, Label } from "./styledInfoBar";
import { Icon } from "@rneui/base";
import { color, locale } from "../../global";
import { useEffect } from "react";
import * as Speech from 'expo-speech';
import { useState, useContext, useRef } from "react";
import { PreferencesContext } from "../../Context/Preferences";
import { Animated } from "react-native";
import { TouchableWithoutFeedback } from "react-native"
import { dimensions, localeTexts } from "../../global";

export default function InfoBar(props) {
    // TTS
    const preferences = useContext(PreferencesContext)

    const checkpoint = props.checkpoint;
    const corner = props.corner;
    const trackStarted = props.trackStarted;
    useEffect(() => {
        if (preferences.TTS) {
            Speech.speak(
                localeTexts["ttsButton"],
                { language: locale }
            );
        }
    }, [preferences.TTS])

    useEffect(() => {
        if (preferences.TTS && trackStarted) {
            Speech.stop();
            Speech.speak(
                checkpoint.title,
                {
                    language: locale,
                    onDone: () => {
                        Speech.speak(checkpoint.description, { language: locale });
                    }
                }
            );
        }
    }, [checkpoint, trackStarted]);

    useEffect(() => {
        if (preferences.TTS && corner.direction !== "" && trackStarted) {
            Speech.stop();
            Speech.speak(corner.direction, { language: locale });
        }

    }, [corner, trackStarted]);

    // Drawer animation
    const [isOpen, setIsOpen] = useState(false)
    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: Number(isOpen),
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isOpen])

    const yVal = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [dimensions.width * 0.75, 0],
    });
    const animStyle = {
        transform: [{ translateY: yVal }],
    };

    return (
        <Wrapper style={animStyle} >
            <>
                <TouchableWithoutFeedback onPress={() => { setIsOpen(!isOpen) }} accessibilityRole="button" accessibilityHint={localeTexts["ariaButtonExpand"]} >
                    <Header
                        accessible={true}
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            elevation: 10
                        }}
                    >
                        <Line accessibilityRole="none" />
                        <Label>
                            <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconCheckpoint"]} type="material" name="location-pin" size={15} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                            <Title accessible={true} accessibilityRole="none">
                                {checkpoint.title}
                            </Title>
                        </Label>

                    </Header>
                </TouchableWithoutFeedback>
                <Body>
                    <Description>
                        {checkpoint.description}
                    </Description>
                </Body>

            </>
        </Wrapper>
    )
}