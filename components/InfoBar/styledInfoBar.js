import styled from "styled-components"
import { ScrollView, Text, View } from "react-native"
import { color, dimensions } from "../../global"
import { Animated } from "react-native"


const Wrapper = styled(Animated.View)`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    bottom: 0;    
`
const Header = styled(View)`
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 0;
    background-color: ${color.primaryContainer};
    max-height: 64px;
    padding: 8px 16px;
    justify-content: center;    
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`
const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    z-index: 3;
    color: ${color.onPrimaryContainer};
    `

const Line = styled(View)`
    background-color:${color.onPrimaryContainer};
    height: 3px;
    width: 32px;
    align-self: center;
    `
const Body = styled(ScrollView)`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${dimensions.width * 0.75 + 'px'};
        background-color: ${color.primaryContainer};
        padding: 16px;        
    `
const Description = styled(Text)`
        font-size: 15px;
        z-index: 3;
        color: ${color.onPrimaryContainer};
    `

export { Wrapper, Header, Title, Line, Body, Description }