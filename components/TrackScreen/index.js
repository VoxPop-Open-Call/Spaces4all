import { View } from "react-native";
import { useEffect } from "react";
import { Alert } from "react-native";

export default function TrackScreen({ navigation, route }) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
                // Prompt the user before leaving the screen
                Alert.alert(
                    'Tem certeza?',
                    'Caso saia agora tera que recomeçar a percurso do início.',
                    [
                        { text: "Cancelar", style: 'cancel', onPress: () => { } },
                        {
                            text: 'Sair',
                            style: 'destructive',
                            // If the user confirmed, then we dispatch the action we blocked earlier
                            // This will continue the action that had triggered the removal of the screen
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ]
                );
            }),
        [navigation]
    );
    return (
        <View>
        </View>
    )
}