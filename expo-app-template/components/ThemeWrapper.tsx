import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@/context/themeContext';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = useTheme();

  return (
    <View className={colorScheme === 'dark' ? 'dark' : ''} style={{ flex: 1 }}>
      {children}
    </View>
  );
};
