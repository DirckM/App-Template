import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import storage from '@/lib/utils/storageMethod';

const supabaseUrl = process.env.EXPO_PUBLIC_REACT_NATIVE_SUPABASE_URL || '';
const supabaseAnonKey =
  process.env.EXPO_PUBLIC_REACT_NATIVE_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Loaded' : 'not loaded');

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
