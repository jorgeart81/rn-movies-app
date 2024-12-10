import { View, Text, ActivityIndicator } from 'react-native';

import { useMovies } from '@/presentation/hooks';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <View className='flex-1 pt-2 bg-slate-50'>
      <Text className='text-3xl font-bold px-4 mb-2 color-slate-800'>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
