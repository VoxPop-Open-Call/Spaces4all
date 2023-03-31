import { Container, Item, PlayButton, Body, InfoRow, Info, Title, Label } from './styledTrackList'
import { Icon } from '@rneui/base'
import { color } from '../../global'
export default function TrackList(props) {
    return (
        <Container>
            {props.tracks.map((track) =>
                <Item key={track.id}>
                    <Body>
                        <Title>{track.name}</Title>
                        <InfoRow>
                            <Info>
                                <Icon type="material" name="timer" color={color.onPrimaryContainer} size={13}></Icon>
                                <Label>{track.duration}</Label>
                            </Info>
                            <Info>
                                <Icon type="material" name="flag" color={color.onPrimaryContainer} size={13} />
                                <Label>{Object.keys(track.checkpoints).length}</Label>
                            </Info>
                        </InfoRow>
                    </Body>


                    <PlayButton>
                        <Icon type="antdesign" name="caretright" color={color.onPrimary} size={18}></Icon>
                    </PlayButton>
                </Item>
            )}
        </Container>
    )
}