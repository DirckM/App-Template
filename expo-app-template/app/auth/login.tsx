import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';
import { supabase } from '@/lib/utils/supabaseClient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignup = () => {
    router.push('/auth/sign-up'); // Adjust if your signup route differs
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.replace('/(app)/(tabs)');
    }
  };

  const handleForgotPassword = async () => {
    router.push('/auth/forgot-password'); // Adjust if your forgot password route differs
  };

  return (
    <Box className="flex-1 justify-center px-6 bg-white">
      <VStack space="lg">
        <Text className="text-2xl font-bold text-center mb-4">Login</Text>

        <Input variant="outline" size="md" className="mb-4">
          <InputField
            className="text-base text-black"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </Input>

        <Input variant="outline" size="md" className="mb-4">
          <InputField
            className="text-base, text-black"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />
        </Input>

        <Button onPress={handleSignIn} className="mb-2 bg-red-100">
          <ButtonText>Log in</ButtonText>
        </Button>

        <Button variant="link" onPress={goToSignup} className="mb-2 bg-red-100">
          <ButtonText className="text-black">Go to Signup</ButtonText>
        </Button>

        <Button
          variant="link"
          onPress={handleForgotPassword}
          className="bg-red-100"
        >
          <ButtonText className="text-black">Forgot Password</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
