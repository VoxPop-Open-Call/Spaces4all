import styled from "styled-components";
import { View, Text } from "react-native";
import { color } from "../../global";

const Background = styled(View)`
width: 100%;
height: 100%;
background-color: ${color.primary};
`
const Container = styled(View)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
`
const Stars = styled(View)`
display: flex;
flex-direction: row;
margin: 16px 0;
`
const Title = styled(Text)`
font-size: 30px;
font-weight: bold;
text-align: center;
color: ${color.onPrimary};
margin-bottom: 32px;
`
const SubTitle = styled(Text)`
font-size: 20px;
text-align: center;
color: ${color.onPrimary};
`

export { Background, Container, Stars, Title, SubTitle }