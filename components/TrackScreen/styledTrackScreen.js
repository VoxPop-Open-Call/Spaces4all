import { View } from "react-native";
import styled from "styled-components";
import MapView, { Marker } from 'react-native-maps';


const Container = styled(View)`
    flex: 1;
`
const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`
const Checkpoint = styled(Marker)`

`
export { Container, Map, Checkpoint }
