import { ThemeProvider } from '@rneui/themed';
import { StackNavigator, SideNavigator } from './components/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StackNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}