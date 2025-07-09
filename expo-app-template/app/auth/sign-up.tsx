import { Box } from '@/components/ui/box';
import { useAuth } from '@/context/authenticationContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';

export default function SignUpScreen() {
  const { signUpNewUser, validateEmail, validatePassword } = useAuth();
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuthSuccess = (newUserId: string) => {
    setUserId(newUserId);
  };

  const goToLogin = () => {
    router.push('/auth/login');
  };

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      console.error('Invalid email format:', email);
      return;
    }

    if (!validatePassword(password)) {
      alert(
        'Password must be at least 8 characters long and include at least one special character.',
      );
      console.error('Invalid password format:', password);
      return;
    }

    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success && result.data?.user?.id) {
        router.replace('/auth/complete-profile');
      } else {
        alert(result.error?.message || 'Unknown signup error');
      }
    } catch (err) {
      alert('Signup error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="flex-1 justify-center px-6 bg-white">
      <VStack space="lg">
        <Text className="text-2xl font-bold text-center mb-4">Sign Up</Text>

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

        <Input variant="outline" size="md" className="mb-6">
          <InputField
            className="text-base text-black"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />
        </Input>

        <Button
          onPress={handleSignUp}
          isDisabled={loading}
          className="mb-4 bg-blue-500"
        >
          <ButtonText className="text-white">
            {loading ? 'Creating Account...' : 'Sign Up'}
          </ButtonText>
        </Button>

        <Button variant="link" onPress={goToLogin}>
          <ButtonText className="text-black">Go to Login</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
