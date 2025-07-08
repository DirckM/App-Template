// app/index.js
import TestComponent from '@/components/TestComponent';
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Home Screen</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TestComponent />
    </View>
  );
};

export default HomeScreen;
