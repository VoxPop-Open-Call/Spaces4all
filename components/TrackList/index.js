import { Container, Item, PlayButton, Buttons, Body, InfoRow, Info, Title, Label } from './styledTrackList'
import { Icon } from '@rneui/base'
import { color, localeTexts } from '../../global'
import { Linking } from 'react-native'
export default function TrackList(props) {
    return (
        <Container accessible={true}>
            {props.tracks.map((track, i) =>
                <Item key={i}>
                    <Body>
                        <Title>{track.name}</Title>
                        <InfoRow>
                            <Info>
                                <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconTime"]} type="material" name="timer" color={color.onPrimaryContainer} size={13}></Icon>
                                <Label>{track.duration}</Label>
                            </Info>
                            <Info>
                                <Icon accessibilityRole="none" accessibilityLabel={localeTexts["ariaIconCheckpointNumber"]} type="material" name="flag" color={color.onPrimaryContainer} size={13} />
                                <Label>{Object.keys(track.checkpoints).length}</Label>
                            </Info>
                        </InfoRow>
                    </Body>
                    <Buttons>
                        <PlayButton
                            onPress={() => Linking.openURL(props.googleMaps)}
                            disabled={props.userDistance === null || props.userDistance === undefined ? true : props.userDistance.value <= 1000}
                            activeOpacity={0.9}
                            underlayColor='#222222'
                            accessibilityRole="button"
                            accessibilityLabel={props.userDistance === null || props.userDistance === undefined || props.userDistance.value <= 1000 ? '' : localeTexts["ariaButtonGoogleMaps"]}
                        >
                            <Icon type="material-community" name="map-search" color={color.onPrimary} size={18}></Icon>
                        </PlayButton>
                        <PlayButton
                            onPress={() => props.navigation.navigate('Track', track)}
                            disabled={props.userDistance === null || props.userDistance === undefined ? true : props.userDistance.value > 1000}
                            activeOpacity={0.9}
                            underlayColor='#222222'
                            accessibilityRole="button"
                            accessibilityLabel={props.userDistance === null || props.userDistance === undefined || props.userDistance.value > 1000 ? '' : localeTexts["ariaButtonBeginTrack"]}
                        >
                            <Icon type="antdesign" name="caretright" color={color.onPrimary} size={18}></Icon>

                        </PlayButton>
                    </Buttons>

                </Item>
            )}
        </Container>
    )
}

