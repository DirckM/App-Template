import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageType = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
};

const WebStorage: StorageType = {
  getItem: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return Promise.resolve(window.localStorage.getItem(key));
    }
    return Promise.resolve(null);
  },
  setItem: (key, value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.resolve();
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
      return Promise.resolve();
    }
    return Promise.resolve();
  },
};

const storage: StorageType = Platform.OS === 'web' ? WebStorage : AsyncStorage;

export default storage;
