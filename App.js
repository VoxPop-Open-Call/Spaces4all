import { ThemeProvider } from '@rneui/themed';
import { MainHeader } from './components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MainHeader />

      </ThemeProvider>
    </SafeAreaProvider>
  );
}