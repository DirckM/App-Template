import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { useAuth } from '@/context/authenticationContext';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { Profile } from '@/db/schema';
import { getProfileById } from '@/lib/api/profile';

export default function ProfileScreen() {
  const { session, signOut } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user?.id) {
        setError('No user session found.');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const data = await getProfileById(session.user.id);

        if (!data) {
          setError('Profile not found.');
          Alert.alert('Error', 'Profile not found.');
        } else {
          setProfile(data);
        }
      } catch (err: any) {
        console.error('Unexpected error fetching profile:', err);
        setError('Unexpected error occurred.');
        Alert.alert('Error', 'Unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [session]);

  const handleLogout = async () => {
    const { error } = await signOut();
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
