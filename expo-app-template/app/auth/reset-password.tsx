import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/utils/supabaseClient';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useAuth } from '@/context/authenticationContext';

export default function ResetPasswordScreen() {
  const { validatePassword } = useAuth();
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tokenVerified, setTokenVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { token_hash, type } = useLocalSearchParams();

  useEffect(() => {
    const handleTokenExchange = async () => {
      if (token_hash && type) {
        try {
          const { error } = await supabase.auth.verifyOtp({
            type: type as any,
            token_hash: token_hash as string,
          });

          if (!error) {
            setTokenVerified(true);
          } else {
            Alert.alert(
              'Invalid Reset Link',
              'The reset link has expired or is invalid. Please request a new one.',
              [
                {
                  text: 'Request New Link',
                  onPress: () => router.replace('/auth/forgot-password'),
                },
                {
                  text: 'Back to Login',
                  onPress: () => router.replace('/auth/login'),
                },
              ],
            );
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : 'An unknown error occurred.';
          Alert.alert('Authentication Error', errorMessage, [
            {
              text: 'Try Again',
              onPress: () => router.replace('/auth/forgot-password'),
            },
          ]);
          console.error('Token exchange error:', error);
        }
      } else {
        Alert.alert(
          'Invalid Link',
          'The reset link is malformed. Please request a new one.',
          [
            {
              text: 'Request New Link',
              onPress: () => router.replace('/auth/forgot-password'),
            },
          ],
        );
      }
      setLoading(false);
    };

    handleTokenExchange();
  }, [token_hash, type, router]);

  const handlePasswordUpdate = async () => {
    setError('');
    setUpdating(true);

    // Fix: validatePassword should return true for INVALID passwords
    // The logic was inverted in your original code
    if (!validatePassword(newPassword)) {
      setError('Password must be at least 8 characters.');
      setUpdating(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setUpdating(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        setError(error.message || 'Something went wrong.');
      } else {
        setSuccessMessage('Password updated successfully!');
        setTimeout(() => {
          router.replace('/auth/login');
        }, 2000);
      }
    } catch (error) {
      setError('An unexpected error occurred.');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <Box className="flex-1 justify-center px-6">
        <Text className="text-center text-lg">Verifying reset link...</Text>
      </Box>
    );
  }

  if (!tokenVerified) {
    return (
      <Box className="flex-1 justify-center px-6">
        <Text className="text-2xl font-semibold mb-6 text-red-600">
          Invalid Reset Link
        </Text>
        <Text className="text-base mb-6 text-gray-600">
          The reset link has expired or is invalid. Please request a new one.
        </Text>
        <Button
          variant="link"
          onPress={() => router.replace('/auth/forgot-password')}
          className="bg-blue-100 mb-4"
        >
          <ButtonText className="text-black">Request New Reset Link</ButtonText>
        </Button>
        <Button
          variant="link"
          onPress={() => router.replace('/auth/login')}
          className="bg-gray-100"
        >
          <ButtonText className="text-black">Back to Login</ButtonText>
        </Button>
      </Box>
    );
  }

  return (
    <Box className="flex-1 justify-center px-6">
      <Text className="text-2xl font-semibold mb-6">Reset Your Password</Text>

      {successMessage ? (
        <Text className="text-green-600 text-base mb-4">{successMessage}</Text>
      ) : (
        <>
          <Input variant="outline" className="mb-4">
            <InputField
              placeholder="New password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              placeholderTextColor="#999"
            />
          </Input>

          <Input variant="outline" className="mb-4">
            <InputField
              placeholder="Confirm new password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor="#999"
            />
          </Input>

          {error ? <Text className="text-red-600 mb-4">{error}</Text> : null}

          <Button
            className="bg-blue-600 disabled:opacity-50"
            disabled={!tokenVerified || updating}
            onPress={handlePasswordUpdate}
          >
            <ButtonText className="text-white text-lg">
              {updating ? 'Updating...' : 'Update Password'}
            </ButtonText>
          </Button>
        </>
      )}
    </Box>
  );
}
