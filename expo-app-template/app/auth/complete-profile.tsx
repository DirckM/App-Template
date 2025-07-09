import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { supabase } from '@/lib/utils/supabaseClient';
import { UserProfile } from '@/lib/types/global';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function CompleteProfile() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [full_name, setFullName] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const allFieldsFilled = username.trim() !== '' && full_name.trim() !== '';

  const goToLogin = () => {
    router.push('/auth/login'); // Adjust if your login route differs
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        Alert.alert('Error', 'User not authenticated.');
        router.replace('/auth/login');
      } else {
        setUserId(user.id);
      }
    };
    fetchUserId();
  }, []);

  const handleSubmit = async () => {
    if (!allFieldsFilled || !userId) return;

    setLoading(true);
    try {
      const profile: UserProfile = {
        id: userId,
        updated_at: new Date(),
        username,
        full_name,
        avatar_url,
        website: websiteUrl,
      };

      const { error } = await supabase
        .from('profiles')
        .upsert(profile, { onConflict: 'id' });

      if (error) throw error;

      router.replace('/'); // Go to app root after success
    } catch (error) {
      Alert.alert('Profile creation failed', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="flex-1 justify-center px-6 bg-white">
      <VStack space="lg">
        <Text className="text-2xl font-bold text-center mb-4">
          Complete Your Profile
        </Text>

        <Input variant="outline" size="md" className="mb-3">
          <InputField
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            className="text-base text-black"
            placeholderTextColor="#999"
          />
        </Input>

        <Input variant="outline" size="md" className="mb-3">
          <InputField
            placeholder="Full Name"
            value={full_name}
            onChangeText={setFullName}
            className="text-base text-black"
            placeholderTextColor="#999"
          />
        </Input>

        <Input variant="outline" size="md" className="mb-3">
          <InputField
            placeholder="Website URL (optional)"
            value={websiteUrl}
            onChangeText={setWebsiteUrl}
            className="text-base text-black"
            placeholderTextColor="#999"
          />
        </Input>

        <Input variant="outline" size="md" className="mb-4">
          <InputField
            placeholder="Avatar URL (optional)"
            value={avatar_url}
            onChangeText={setAvatarUrl}
            className="text-base text-black"
            placeholderTextColor="#999"
          />
        </Input>

        <Button
          onPress={handleSubmit}
          isDisabled={!allFieldsFilled || loading}
          className={`bg-green-500 ${!allFieldsFilled || loading ? 'opacity-50' : ''}`}
        >
          <ButtonText className="text-white">
            {loading ? 'Saving Profile...' : 'Finish Sign Up'}
          </ButtonText>
        </Button>

        <Button
          onPress={goToLogin}
          className={`bg-green-500 ${!allFieldsFilled || loading ? 'opacity-50' : ''}`}
        >
          <ButtonText className="text-white">
            {loading ? 'Saving Profile...' : 'Go to Login'}
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
