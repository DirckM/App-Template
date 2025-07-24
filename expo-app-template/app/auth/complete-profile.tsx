import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { supabase } from '@/lib/utils/supabaseClient';
import type { Profile } from '@/db/schema';

import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function CompleteProfile() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [profile_image_url, setProfileImageUrl] = useState('');
  const [country, setCountry] = useState('');
  const [date_of_birth, setDateOfBirth] = useState<Date>();
  const [dateOfBirthString, setDateOfBirthString] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const isValidDate = (dateString: string): boolean => {
    if (!dateString) return false;

    const date = new Date(dateString);
    const matchesFormat = /^\d{4}-\d{2}-\d{2}$/.test(dateString);

    return date instanceof Date && !isNaN(date.getTime()) && matchesFormat;
  };

  const allFieldsFilled =
    username.trim() !== '' &&
    first_name.trim() !== '' &&
    last_name.trim() !== '' &&
    country.trim() !== '' &&
    dateOfBirthString.trim() !== '' &&
    isValidDate(dateOfBirthString);

  // Handle date input change
  const handleDateChange = (text: string) => {
    setDateOfBirthString(text);
    // Update the Date object when the string changes
    if (isValidDate(text)) {
      setDateOfBirth(new Date(text));
    } else {
      setDateOfBirth(undefined);
    }
  };

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
      const profile: Profile = {
        id: userId,
        username,
        firstname: first_name,
        lastname: last_name,
        bio,
        profile_image_url: profile_image_url,
        country: country,
        date_of_birth: date_of_birth?.toISOString().split('T')[0] ?? '',
        created_at: new Date(),
        updated_at: new Date(),
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // Adjust based on header/nav height if needed
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Box className="flex-1 justify-center px-6 bg-white py-6">
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
                  placeholder="First Name"
                  value={first_name}
                  onChangeText={setFirstName}
                  className="text-base text-black"
                  placeholderTextColor="#999"
                />
              </Input>

              <Input variant="outline" size="md" className="mb-3">
                <InputField
                  placeholder="Last Name"
                  value={last_name}
                  onChangeText={setLastName}
                  className="text-base text-black"
                  placeholderTextColor="#999"
                />
              </Input>

              <Input variant="outline" size="md" className="mb-3">
                <InputField
                  placeholder="Bio"
                  value={bio}
                  onChangeText={setBio}
                  className="text-base text-black"
                  placeholderTextColor="#999"
                />
              </Input>

              <Input variant="outline" size="md" className="mb-4">
                <InputField
                  placeholder="Profile Image URL (optional)"
                  value={profile_image_url}
                  onChangeText={setProfileImageUrl}
                  className="text-base text-black"
                  placeholderTextColor="#999"
                />
              </Input>

              <Input variant="outline" size="md" className="mb-4">
                <InputField
                  placeholder="Country"
                  value={country}
                  onChangeText={setCountry}
                  className="text-base text-black"
                  placeholderTextColor="#999"
                />
              </Input>

              <Input variant="outline" size="md" className="mb-4">
                <InputField
                  placeholder="Birth date (YYYY-MM-DD)"
                  value={dateOfBirthString}
                  onChangeText={handleDateChange}
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
