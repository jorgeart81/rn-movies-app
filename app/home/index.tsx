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
    <View>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
};

export default HomeScreen;
