import { ThemeProvider } from '@rneui/themed';
import { StackNavigator } from './components/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LocationContext from './components/LocationContext'
import { useState } from 'react';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';





export default function App() {

  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function getLocation() {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      Alert.alert(
        'Localizção',
        'A App precisa da vossa localização para funcionar, pedimos que active a Localização por GPS e permita a App nas configurações.',
        [
          {
            text: 'Opções',
            style: 'destructive',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ]
      );
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location);
    setErrorMsg(null);
  };

  return (
    <SafeAreaProvider>
      <LocationContext.Provider value={{
        getLocation: getLocation,
        userLocation: userLocation,
        errorMsg: errorMsg,
      }} >
        <ThemeProvider>
          <StackNavigator />
        </ThemeProvider>
      </LocationContext.Provider>
    </SafeAreaProvider>
  );
}