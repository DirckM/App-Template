import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { useAuth } from '@/context/authenticationContext';
import { supabase } from '@/lib/utils/supabaseClient';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';

export default function ProfileScreen() {
  const { session } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<{
    username: string;
    firstname: string;
  } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (session) {
        const { data, error } = await supabase
          .from('profiles')
          .select('username, firstname')
          .eq('id', session.user.id)
          .single();

        if (error) {
          Alert.alert('Error fetching profile', error.message);
        } else {
          setProfile(data);
        }
      }
    };

    fetchProfile();
  }, [session]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.replace('/auth/login');
    }
  };

  return (
    <Box className="flex-1 px-6 py-12 bg-white">
      <VStack space="lg">
        <Text className="text-3xl font-bold text-center mb-4">Profile</Text>

        <Text className="text-lg">Email: {session?.user?.email}</Text>
        <Text className="text-lg">Username: {profile?.username ?? 'N/A'}</Text>
        <Text className="text-lg">
          Full Name: {profile?.firstname ?? 'N/A'}
        </Text>

        <Button className="mt-8 bg-red-200" onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
