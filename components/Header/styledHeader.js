import styled from 'styled-components';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { color, dimensions } from '../global';

const Title = styled(Text)`
font-family: 'Roboto';
font-weight: 400;
font-size: 28px;
line-height: 50px;
text-align: center;
color: ${color.onPrimaryContainer};
`

const SideMenuBackdrop = styled(View)`
position: absolute;
width: ${dimensions.width + 'px'};
height: ${dimensions.height + 'px'};
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
`



export { Title, SideMenuBackdrop };