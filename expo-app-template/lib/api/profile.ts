import { supabase } from '@/lib/utils/supabaseClient';
import { Alert } from 'react-native';
import { Profile } from '@/db/schema'; // optional, depends on typing

export async function getProfileById(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', userId)
    .single();

  if (error) {
    Alert.alert('Error fetching profile', error.message);
    return null;
  }

  return data;
}
