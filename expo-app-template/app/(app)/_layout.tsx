import DefaultHeader from '@/components/DefaultHeader';
import { useAuth } from '@/context/authenticationContext';
import '@/global.css';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  const { session, loading } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !session) {
      router.replace('/auth/login');
    }
  }, [loading, session]);

  // Don't render layout until fonts + auth state are ready
  if (loading || !session) return null;

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          header: () => <DefaultHeader />,
          headerShown: true,
        }}
      >
        {/* We can add all the screens that we want in our app here using : <Stack.Screen name="messages" /> */}
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
