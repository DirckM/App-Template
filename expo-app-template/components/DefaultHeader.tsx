import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Send, UserPlus } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';

const DefaultHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <Box style={{ paddingTop: insets.top }} className="w-full bg-white">
      <HStack className="px-4 py-4 justify-between items-center">
        <VStack className="flex-1">
          <Text className="text-2xl font-bold text-black">WakeUp</Text>
        </VStack>

        <HStack className="items-center">
          <Pressable
            className="p-2 ml-2"
            onPress={() => {
              /* handle invite */
            }}
          >
            <UserPlus size={24} color="black" />
          </Pressable>

          <Pressable
            className="p-2 ml-1"
            onPress={() => {
              /* handle send */
            }}
          >
            <Send size={24} color="black" />
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
};

export default DefaultHeader;
