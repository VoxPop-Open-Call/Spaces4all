import { Background, Container, Header, ButtonGroup, Footer, Title } from './styledSideMenu';
import { Icon, ListItem } from '@rneui/themed';
import { color } from '../global';
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const SideMenu = (props) => {
    return (<Background>
        <Container>

            <Header>

                <Title>Menu</Title>
            </Header>


            <DrawerContentScrollView {...props}>
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>


            <Footer>
                {'Ambigrama © ' + new Date().getFullYear()}
            </Footer>

        </Container>
    </Background>)

}

export default SideMenu