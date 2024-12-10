import { SafeAreaView } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className='flex-1'>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default RootLayout;
