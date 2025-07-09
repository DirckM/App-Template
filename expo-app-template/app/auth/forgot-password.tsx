// app/auth/forgot-password.tsx
import React, { useState } from 'react';
import { useAuth } from '@/context/authenticationContext';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { Platform } from 'react-native';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const { resetPassword, validateEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleReset = async () => {
    // Check for valid email format
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const redirectTo =
      'web' == 'web'
        ? 'http://localhost:8081/auth/reset-password'
        : 'expoapptemplate://reset-password';

    setErrorMsg('');
    const { success, error } = await resetPassword(email, {
      redirectTo: redirectTo,
    });

    if (success) {
      setSubmitted(true);
    } else {
      setErrorMsg(error?.message || 'Something went wrong');
    }
  };

  const backToLogin = () => {
    // Navigate back to the login screen
    // Adjust the path if your login route differs
    router.push('/auth/login');
  };

  return (
    <Box className="flex-1 justify-center px-6">
      <Text className="text-2xl font-semibold mb-6">Reset Password</Text>
      {submitted ? (
        <>
          <Text className="text-base text-green-600">
            If this email is registered, you will receive a reset link shortly.
          </Text>
          <Button variant="link" onPress={backToLogin} className="bg-red-100">
            <ButtonText className="text-black">Back to login</ButtonText>
          </Button>
        </>
      ) : (
        <>
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
          {errorMsg ? (
            <Text className="text-red-600 mb-4">{errorMsg}</Text>
          ) : null}
          <Button variant="link" onPress={handleReset} className="bg-red-100">
            <ButtonText className="text-black">Send reset link</ButtonText>
          </Button>
        </>
      )}
    </Box>
  );
}
