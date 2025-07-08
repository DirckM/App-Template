// screens/signup.tsx


//Now it is good to notice that in this file we are going through two steps:
// 1. The user signs up with their email and password
// 2. The user fills out their profile information
// After the user completes their profile, they are redirected to the main app.

import { useAuth } from '@/context/authenticationContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import ProfileForm from './components/ProfileForm';
import SignupForm from './components/SignupForm';

export default function SignUpScreen() {
  const { signUpNewUser } = useAuth();
  const router = useRouter();

  //We are first signing up the user, then we are going to the profile form
  const [step, setStep] = useState(1); // 1 = auth, 2 = profile
  const [userId, setUserId] = useState<string | null>(null);

  // Once the user is signed up, we are going to the profile form
  const handleAuthSuccess = (newUserId: string) => {
    setUserId(newUserId);
    setStep(2);
  };

  // Once the profile is complete, we are going to the app
  const handleProfileComplete = () => {
    router.replace('/(app)/(tabs)');
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      {step === 1 ? (
        <SignupForm
          onSuccess={handleAuthSuccess}
          signUpNewUser={signUpNewUser}
        />
      ) : userId ? (
        <ProfileForm userId={userId} onComplete={handleProfileComplete} />
      ) : null}
    </View>
  );
}
