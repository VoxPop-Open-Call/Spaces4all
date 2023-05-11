import { Wrapper, Header, Title, Line, Body, Description } from "./styledInfoBar";
import { Icon } from "@rneui/base";
import { color, locale } from "../../global";
import { useEffect } from "react";
import * as Speech from 'expo-speech';
import { useState, useContext, useRef } from "react";
import { PreferencesContext } from "../../Context/Preferences";
import { Animated } from "react-native";
import { TouchableWithoutFeedback } from "react-native"
import { dimensions } from "../../global";

export default function InfoBar(props) {

    const [checkpoint, setCheckpoint] = useState(props.checkpoint)

    // TTS
    const preferences = useContext(PreferencesContext)

    useEffect(() => {
        if (preferences.TTS) {
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

    }, [checkpoint]);

    if (props.checkpoint !== checkpoint) {
        setCheckpoint(props.checkpoint)
    }

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
                <TouchableWithoutFeedback onPress={() => { setIsOpen(!isOpen) }} >
                    <Header style={{
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
                        <Line />

                        <Title>
                            <Icon type="material" name="location-pin" size={15} style={{ marginRight: 3 }} color={color.onPrimaryContainer} />
                            {checkpoint.title}
                        </Title>
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