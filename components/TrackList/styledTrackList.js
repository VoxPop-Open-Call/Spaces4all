import styled from "styled-components";
import { View, TouchableHighlight, Text } from "react-native";
import { color } from "../../global";

const Container = styled(View)`
display: flex;
flex-direction: column;
width: 100%;
background-color: #D9CBEF;
min-height: 100%;
padding-top: 16px;
`
const Item = styled(View)`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 8px 16px 8px 32px;

`
const Body = styled(View)`
display: flex;
flex-direction: column;
`

const InfoRow = styled(View)`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
`
const Info = styled(View)`
display: flex;
flex-direction: row;
align-items: center;
gap: 4px;
`
const PlayButton = styled(TouchableHighlight)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:${color.primary};
border-radius: 64px;
height: 47px;
width: 47px;
`
const Title = styled(Text)`
font-size: 16px;
font-weight: 700;
color: ${color.onPrimaryContainer};
`
const Label = styled(Text)`
font-size: 13px;
color: ${color.onPrimaryContainer};
`

export { Container, Item, PlayButton, Body, InfoRow, Info, Title, Label }