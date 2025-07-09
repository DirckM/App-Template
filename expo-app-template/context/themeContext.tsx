import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@/lib/utils/storageMethod'; // Adjust import path as needed

const STORAGE_KEY = 'user-theme-preference';

type ColorScheme = 'light' | 'dark';

const ThemeContext = createContext<{
  colorScheme: ColorScheme;
  toggleTheme: () => void;
}>({
  colorScheme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme() || 'light';
  const [colorScheme, setColorScheme] = useState<ColorScheme>(systemScheme);
  const [isLoading, setIsLoading] = useState(true);

  // Load stored theme preference on mount
  useEffect(() => {
    storage
      .getItem(STORAGE_KEY)
      .then((storedTheme) => {
        if (storedTheme === 'light' || storedTheme === 'dark') {
          setColorScheme(storedTheme);
        } else {
          setColorScheme(systemScheme);
        }
      })
      .finally(() => setIsLoading(false));
  }, [systemScheme]);

  // Toggle theme and save to storage
  const toggleTheme = () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newTheme);
    storage
      .setItem(STORAGE_KEY, newTheme)
      .catch((e) => console.error('Failed to save theme:', e));
  };

  if (isLoading) {
    // Optionally render null or splash/loading UI while loading
    return null;
  }

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
