import Locations from '../Locations';
import { View } from 'react-native';



export default function HomeScreen({ navigation, route }) {

    return (
        <View>
            <Locations navigation={navigation} />
        </View>

    );
}