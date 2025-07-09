import TestComponent from '@/components/TestComponent';
import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button'; // Adjust import if needed

const HomeScreen = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/profile');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Home Screen</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TestComponent />
      <Button onPress={handlePress}>
        <ButtonText>Click Me</ButtonText>
      </Button>
    </View>
  );
};

export default HomeScreen;
