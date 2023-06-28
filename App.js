import { ThemeProvider } from '@rneui/themed';
import { StackNavigator } from './components/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PreferencesProvider } from './Context/Preferences';
import { LocationProvider } from './Context/Location';
import { color } from './global';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <SafeAreaProvider style={{ backgroundColor: color.primaryContainer }}>
      <StatusBar style="dark" />
      <LocationProvider>
        <PreferencesProvider>
          <ThemeProvider>
            <StackNavigator />
          </ThemeProvider>
        </PreferencesProvider>
      </LocationProvider>
    </SafeAreaProvider>
  );
}