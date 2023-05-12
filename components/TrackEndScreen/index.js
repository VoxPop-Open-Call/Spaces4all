import { Background, Container, Stars, SubTitle, Title } from "./StyledTrackEndScreen";
import { Icon, Button } from "@rneui/base";
import { color } from "../../global";
import { useState, useEffect } from "react";

export default function TrackEndScreen({ navigation }) {
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

    const [starCount, setStarCount] = useState(-1);

    return (
        <Background>
            <Container>
                <Title>
                    {"Percurso Terminado!"}
                </Title>
                <SubTitle>
                    {"Oque achou?"}
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
                    title={'Enviar'}
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