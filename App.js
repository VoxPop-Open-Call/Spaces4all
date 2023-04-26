import { ThemeProvider } from '@rneui/themed';
import { StackNavigator } from './components/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LocationContext from './components/LocationContext'
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';
import { REACT_APP_API_KEY } from '@env';
import axios from 'axios';


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
    return;
  };

  const [userDistance, setUserDistance] = useState(null);

  function getDistance(latitude, longitude) {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation.coords.latitude},${userLocation.coords.longitude}&destinations=${latitude},${longitude}&key=${REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then(r => {
        setUserDistance(r.data.rows[0].elements[0].distance);
      })
      .catch(err => {
        console.log(err);
      });
    return (userDistance);
  }

  return (
    <SafeAreaProvider>
      <LocationContext.Provider value={{
        getLocation: getLocation,
        userLocation: userLocation,
        getDistance: getDistance,
        userDistance: userDistance,
        errorMsg: errorMsg,
      }}>
        <ThemeProvider>
          <StackNavigator />
        </ThemeProvider>
      </LocationContext.Provider>
    </SafeAreaProvider>
  );
}