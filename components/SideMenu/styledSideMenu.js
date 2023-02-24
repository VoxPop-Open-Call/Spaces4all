import styled from 'styled-components';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { color, dimensions } from '../global';


const Background = styled(View)`
position: absolute;
background-color: ${color.background};
color: ${color.onBackground};
width: ${dimensions.width * 0.77 + 'px'};
height: ${dimensions.height + 'px'};
z-index: 2;
`

const Container = styled(View)`
display: flex;
flex-direction: column;
width: 100%;
height: ${dimensions.safeHeight + 'px'};
justify-content: space-between;
margin-top: auto;
margin-bottom: auto;
padding:16px;
`

const Header = styled(View)`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
`

const Title = styled(Text)`
font-family: 'Roboto';
font-weight: 900;
font-size: 28px;
line-height: 31px;
color: ${color.onBackground};
`

const ButtonGroup = styled(View)`
display: flex;
flex-direction: column;
width: 100%;
height: 90%;
padding: 32px 0;
`

const Footer = styled(Text)`
width : 100%;
text-align: center;
font-size: 10px;
font-style: italic;
font-weight: 300;
height: 3%;
`

export { Background, Container, Header, Title, ButtonGroup, Footer }