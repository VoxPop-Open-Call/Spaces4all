import { Background, Container, Header, ButtonGroup, Footer, Title } from './styledSideMenu';
import { Icon, ListItem } from '@rneui/themed';
import { color } from '../../global';
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function SideMenu(props) {
    return (
        <Background>
            <Container>
                <Header>
                    <Title accessible={false}>Menu</Title>
                </Header>

                <DrawerContentScrollView {...props}>
                    <DrawerItemList  {...props} />
                </DrawerContentScrollView>

                <Footer>
                    {'Ambigrama © ' + new Date().getFullYear()}
                </Footer>

            </Container>
        </Background>
    )
}

