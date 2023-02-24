import { Text, View } from "react-native";
import styled from "styled-components";
import { color } from "../global";

const StyledCard = styled(View)`
    border-radius: 8px;
    background: ${color.primaryContainer};
    margin-bottom: 16px;
    overflow: hidden;
    
`;

const Title = styled(Text)`
margin-bottom: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 26px;
color: ${color.onPrimaryContainer};
`;

const CardBody = styled(View)`
display: flex;
flex-direction: column;
padding: 16px;
`;

const CardRow = styled(View)`
display: flex;
flex-direction: row;
margin-bottom: 4px;
`;

const CardInfo = styled(View)`
margin-right: 6px;
display: flex;
flex-direction: row;
`;

export { StyledCard, Title, CardBody, CardRow, CardInfo }