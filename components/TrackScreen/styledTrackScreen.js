import { View, Text, StatusBar, Dimensions } from "react-native";
import styled from "styled-components";
import MapView, { Marker, Polyline } from 'react-native-maps';
import { color, dimensions } from "../../global";


const Container = styled(View)`
    flex: 1;
`
const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`
const Checkpoint = styled(Marker)`
`
const Path = styled(Polyline)`
`
const Header = styled(View)`
    display: flex;
    flex-direction: row;
    z-index: 2;
    position: absolute;
    width: 100%;
    top: 0;
    padding: 0px 16px;
    background-color: ${color.primaryContainer};
    align-items: center;
    padding-top: ${StatusBar.currentHeight + "px"};
    padding-bottom: 8px;
    elevation: 5;

`
const Distance = styled(Text)`
    font-size: 22px;
    font-weight: bold;
    z-index: 3;
    color: ${color.onPrimaryContainer};
    text-align: center;
    line-height: 29px;
    margin: auto;
`
const Bottom = styled(View)`
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: ${color.primaryContainer};
    min-height: ${dimensions.navBar + "px"};
    padding: 8px 16px;
    justify-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    elevation: 10;
`
const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    z-index: 3;
    color: ${color.onPrimaryContainer};
`
export { Container, Map, Checkpoint, Path, Header, Bottom, Distance, Title }
