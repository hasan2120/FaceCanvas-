// App.tsx
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { UserProvider } from './src/store/useUserStore';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <UserProvider>
          <Slot />
        </UserProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
