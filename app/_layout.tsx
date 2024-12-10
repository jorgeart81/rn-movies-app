import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  const safeArea = useSafeAreaInsets();

  return (
    <QueryClientProvider client={queryClient}>
      <View className='flex-1' style={{ paddingTop: safeArea.top}}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </QueryClientProvider>
  );
};

export default RootLayout;
