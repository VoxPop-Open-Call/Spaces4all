import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainHeader from './components/Header';
import Locations from './components/Locations';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MainHeader pageTitle='Percursos' />
        <Locations />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}