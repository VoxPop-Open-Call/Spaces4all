import { Background, Container, Header, ButtonGroup, Footer, Title } from './styledSideMenu';
import { Icon, ListItem } from '@rneui/themed';
import { color } from '../global';

export default function SideMenu(props) {
    return (<Background>
        <Container>

            <Header>
                <Icon
                    name='close'
                    color={color.onBackground}
                    size={32}
                    onPress={props.action}
                />
                <Title>Menu</Title>
            </Header>

            <ButtonGroup>
                <ListItem containerStyle={{ backgroundColor: 'transparent', padding: 0, paddingBottom: 8 }}>
                    <Icon name="inbox" type="material-community" color={color.onBackground} />
                    <ListItem.Content>
                        <ListItem.Title>Inbox</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: 'transparent', padding: 0, paddingBottom: 8 }}>
                    <Icon name="inbox" type="material-community" color={color.onBackground} />
                    <ListItem.Content>
                        <ListItem.Title>Inbox</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ButtonGroup>

            <Footer>
                {'Ambigrama © ' + new Date().getFullYear()}
            </Footer>

        </Container>
    </Background>)
}