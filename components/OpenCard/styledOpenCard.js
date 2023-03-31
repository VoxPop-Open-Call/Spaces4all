import { Text, View, Pressable } from 'react-native';
import styled from 'styled-components';
import { color } from '../../global';

const Card = styled(Pressable)`
    background: ${color.primaryContainer};
    overflow: hidden;    
`;

const Title = styled(Text)`
    margin-bottom: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: ${color.onPrimaryContainer};
`;
const Info = styled(Text)`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 13px;
    color: ${color.onPrimaryContainer};
`;

const CardBody = styled(View)`
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: ${color.onPrimaryContainer};
`;

const CardRow = styled(View)`
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
    align-items: center;
`;

const CardInfo = styled(View)`
    margin-right: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export { Card, Title, Info, CardBody, CardRow, CardInfo };