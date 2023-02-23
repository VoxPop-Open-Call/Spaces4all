import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainHeader from './components/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MainHeader pageTitle='Percursos' />

      </ThemeProvider>
    </SafeAreaProvider>
  );
}