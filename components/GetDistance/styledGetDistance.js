import styled from "styled-components";
import { Text } from "react-native";
import { color } from "../../global";

const Info = styled(Text)`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 13px;
    color: ${color.onPrimaryContainer};
`;

export { Info }