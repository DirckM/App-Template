import { Text, View } from 'react-native';
import TestComponent from '@/components/TestComponent';
import { Box } from '@/components/ui/box';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TestComponent />
      <Box className="bg-blue-500 p-4 rounded"></Box>
    </View>
  );
}
