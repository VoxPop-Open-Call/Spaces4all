import { ThemeProvider } from '@rneui/themed';
import { StackNavigator } from './components/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PreferencesProvider } from './Context/Preferences';
import { LocationProvider } from './Context/Location';

export default function App() {

  return (
    <SafeAreaProvider>
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