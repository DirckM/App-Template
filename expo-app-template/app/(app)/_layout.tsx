import DefaultHeader from '@/components/DefaultHeader';
import { useAuth } from '@/context/authenticationContext';
import '@/global.css';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { supabase } from '@/lib/utils/supabaseClient';

export default function TabLayout() {
  const { session, loading } = useAuth();
  const [checkingProfile, setCheckingProfile] = useState(true);

  useEffect(() => {
    const checkProfileCompletion = async () => {
      if (!loading && session) {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', session.user.id)
          .single();

        console.log('Profile data:', profile);

        const isIncomplete = !profile || !profile.username;

        if (isIncomplete) {
          router.replace('/auth/complete-profile');
        } else {
          setCheckingProfile(false); // We're ready to show the app
        }
      }
    };

    if (!loading && session) {
      checkProfileCompletion();
    }

    if (!loading && !session) {
      router.replace('/auth/login');
    }
  }, [loading, session]);

  if (loading || !session || checkingProfile) return null;

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          header: () => <DefaultHeader />,
          headerShown: true,
        }}
      >
        {/* We can add all the screens that we want in our app here using : <Stack.Screen name="messages" /> */}
        <Stack.Screen
          name="index"
          options={{
            title: '', // <- removes the default title
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
