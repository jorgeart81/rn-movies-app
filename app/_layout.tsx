import { View, Text, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <View>
          <Text>RootLayout</Text>
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default RootLayout;
