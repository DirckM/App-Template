// RootLayout.tsx

import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AuthProvider } from '@/context/authenticationContext';
import { ThemeProvider, useTheme } from '@/context/themeContext';
import { ThemeWrapper } from '@/components/ThemeWrapper';

import '@/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <InnerApp />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

// InnerApp is a child that consumes the theme context
function InnerApp() {
  const { colorScheme } = useTheme();

  return (
    <GluestackUIProvider mode={colorScheme}>
      <AuthProvider>
        <Stack />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
