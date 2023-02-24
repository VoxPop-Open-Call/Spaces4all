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
                    size={40}
                    onPress={props.action}
                />
                <Title>Menu</Title>
            </Header>

            <ButtonGroup>
                <ListItem containerStyle={{ backgroundColor: 'transparent', padding: 0, paddingBottom: 8 }} onPress={props.action}>
                    <Icon name="settings" type="Feather" color={color.onBackground} />
                    <ListItem.Title>Configurações</ListItem.Title>
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: 'transparent', padding: 0, paddingBottom: 8 }} onPress={props.action}>
                    <Icon name="feedback" type="MaterialIcons" color={color.onBackground} />
                    <ListItem.Title>Feedback</ListItem.Title>
                </ListItem>
            </ButtonGroup>

            <Footer>
                {'Ambigrama © ' + new Date().getFullYear()}
            </Footer>

        </Container>
    </Background>)
}