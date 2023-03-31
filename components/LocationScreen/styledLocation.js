import { Text, View } from 'react-native';
import styled from 'styled-components';
import { color, dimensions } from '../../global';
import { ListItem } from '@rneui/themed';


const Label = styled(Text)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: ${color.onPrimaryContainer};
`;

const DescriptionBody = styled(View)`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width:${(dimensions.width) + "px"};
    padding: 0 16px;
 
`;

const DescriptionTitle = styled(ListItem.Title)`
    padding: 0 16px;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 16px;
    color: ${color.onPrimaryContainer};
      
`;

const DescriptionBodyItem = styled(ListItem.Subtitle)`     
    color: ${color.onPrimaryContainer};
    font-size: 13px;
    text-align: justify;    
`;

export { Label, DescriptionBody, DescriptionTitle, DescriptionBodyItem, }

